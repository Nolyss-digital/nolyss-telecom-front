/**
 * @module Element-Audio-Player
 */

import { useEffect, useRef } from "react";
import { TypeAudioAlbum } from "../../app/@types/reusableTypes";

var audio: HTMLAudioElement;
var buffInterval: NodeJS.Timeout;
var _audioPlayer = {
    currIndex: -1,
    nTime: 0,
    bTime: 0,
    tFlag: false,
    curMinutes: 0,
    curSeconds: 0,
    durMinutes: 0,
    durSeconds: 0,
    playProgress: 0,
    seekT: 0,
    seekLoc: 0,
    cM: 0,
    ctMinutes: 0,
    ctSeconds: 0
}

/**
 * Describes a custom sample audio player
 * @param props : playlist for audio player
 * @returns : audio player with supplied playlist
 */
const AvertAudioPlayer = (props: {
    _playlist: TypeAudioAlbum[]
}) => {
    const { _playlist } = props;
    const _playerTrack = useRef<HTMLDivElement>(null);
    const _albumName = useRef<HTMLDivElement>(null);
    const _trackName = useRef<HTMLDivElement>(null);
    const _artWork = useRef<HTMLImageElement>(null);
    const _currentTime = useRef<HTMLDivElement>(null);
    const _trackLength = useRef<HTMLDivElement>(null);
    const _albumArt = useRef<HTMLDivElement>(null);
    const _trackTime = useRef<HTMLDivElement>(null);
    const _seekArea = useRef<HTMLDivElement>(null);
    const _seekBar = useRef<HTMLDivElement>(null);
    const _sHover = useRef<HTMLDivElement>(null);
    const _insTime = useRef<HTMLDivElement>(null);
    const _playPause = useRef<HTMLTitleElement>(null);

    const initPlayer = () => {
        if (_playlist.length > 0) {
            if (audio === undefined || audio === null) {
                audio = new Audio();
                audio.loop = false;
            } else {
                audio.pause();
            }
            _audioPlayer.currIndex = 0;
            selectTrack(0);
            audio.ontimeupdate = updateCurrTime;
        }
    }

    const selectTrack = (flag: number) => {
        if (_albumArt.current &&
            _trackTime.current &&
            _playerTrack.current) {

            var _al = _albumArt.current!.className;
            var _tt = _trackTime.current!.className;
            var _pt = _playerTrack.current!.className;

            if (flag === 1) {
                if (_audioPlayer.currIndex === _playlist.length - 1)
                    _audioPlayer.currIndex = 0;
                else
                    _audioPlayer.currIndex++;
            } else if (flag === -1) {
                if (_audioPlayer.currIndex === 0)
                    _audioPlayer.currIndex = _playlist.length - 1;
                else
                    _audioPlayer.currIndex--;
            }

            if (flag === 0) {
                setPlayPauseClass('fa fa-play');
            } else {
                if (_al.includes('buffering')) {
                    _al = _al.replace('buffering', '')
                }
                setAlbumArtClass(_al);
                setPlayPauseClass('fa fa-pause')
            }

            setSeekBarWidth(0);

            if (_tt.includes('active')) {
                _tt.replace('active', '')
            }
            setTrackTimeClass(_tt);

            setCurrentTime('00:00');
            setTrackLength('00:00')

            _albumName.current!.innerText = _playlist[_audioPlayer.currIndex].album;
            _trackName.current!.innerText = _playlist[_audioPlayer.currIndex].trackName;
            _artWork.current!.src = _playlist[_audioPlayer.currIndex].albumArt;
            _artWork.current!.alt = _playlist[_audioPlayer.currIndex].album;
            audio.src = _playlist[_audioPlayer.currIndex].track;

            _audioPlayer.nTime = 0;
            _audioPlayer.bTime = new Date().getTime();

            if (flag !== 0) {
                if (audio.paused) {
                    audio.play();

                    if (!_pt.includes("active")) {
                        _pt += " active";
                    }
                    _playerTrack.current!.className = _pt;

                    if (!_al.includes("active")) {
                        _al += " active";
                    }
                    setAlbumArtClass(_al);

                    clearInterval(buffInterval);
                    checkBuffering();
                }
            }
        }
    }

    const playPause = () => {
        if (_playerTrack.current &&
            _albumArt.current) {

            var _pt = _playerTrack.current!.className;
            var _al = _albumArt.current!.className;

            setTimeout(() => {
                try {
                    if (audio.paused) {
                        if (!_pt.includes("active")) {
                            _pt += " active";
                        }
                        _playerTrack.current!.className = _pt;

                        if (!_al.includes("active")) {
                            _al += " active";
                        }
                        setAlbumArtClass(_al);

                        checkBuffering();
                        setPlayPauseClass("fas fa-pause");

                        audio.play();

                    } else {
                        if (_pt.includes("active")) {
                            _pt = _pt.replace("active", "");
                        }
                        _playerTrack.current!.className = _pt;

                        clearInterval(buffInterval);

                        if (_al.includes("active")) {
                            _al = _al.replace("active", "");
                        }
                        if (_al.includes("buffering")) {
                            _al = _al.replace("buffering", "");
                        }
                        setAlbumArtClass(_al);

                        setPlayPauseClass("fas fa-play");
                        audio.pause();
                    }
                } catch (error) {
                    console.log("audio player error : " + error);
                }
            }, 300);
        }
    }

    const showHover = (event: React.MouseEvent) => {
        if (_seekArea.current && _sHover.current && _insTime.current) {

            let sArea = _seekArea.current!;
            let seekAreaLeft = sArea.getBoundingClientRect().x;
            let seekAreaWidth = sArea.getBoundingClientRect().width;

            _audioPlayer.seekT = seekAreaWidth - ((seekAreaLeft + sArea.offsetWidth) - event.clientX);

            _audioPlayer.seekLoc = audio.duration * (_audioPlayer.seekT / sArea.offsetWidth);

            _sHover.current!.style.width = "" + _audioPlayer.seekT;

            _audioPlayer.cM = _audioPlayer.seekLoc / 60;

            _audioPlayer.ctMinutes = Math.floor(_audioPlayer.cM);
            _audioPlayer.ctSeconds = Math.floor(_audioPlayer.seekLoc - _audioPlayer.ctMinutes * 60);

            if (_audioPlayer.ctMinutes < 0 || _audioPlayer.ctSeconds < 0) return;
            if (_audioPlayer.ctMinutes < 0 || _audioPlayer.ctSeconds < 0) return;

            if (isNaN(_audioPlayer.ctMinutes) || isNaN(_audioPlayer.ctSeconds))
                _insTime.current!.innerText = "--:--";
            else
                _insTime.current!.innerText =
                    ((_audioPlayer.ctMinutes < 10) ? "0" : "") + _audioPlayer.ctMinutes + ":" + ((_audioPlayer.ctSeconds < 10) ? "0" : "") + _audioPlayer.ctSeconds;


            _insTime.current!.style.left = _audioPlayer.seekT + "px";
            _insTime.current!.style.marginLeft = "-21px";
            _insTime.current!.style.display = "block";
        }
    }

    const hideHover = () => {
        if (_sHover.current && _insTime.current) {
            _sHover.current!.style.width = "0";
            _insTime.current!.innerText = "00:00";
            _insTime.current!.style.left = "0px";
            _insTime.current!.style.marginLeft = "0px";
            _insTime.current!.style.display = "none";
        }
    }

    const playFromClickedPos = () => {
        if (_seekBar.current) {
            audio.currentTime = _audioPlayer.seekLoc;
            setSeekBarWidth(_audioPlayer.seekT);
            hideHover();
        }
    }

    const updateCurrTime = () => {
        if (_trackTime.current) {

            _audioPlayer.nTime = new Date().getTime();
            var _tt = _trackTime.current!.className;

            if (!_audioPlayer.tFlag) {
                _audioPlayer.tFlag = true;

                if (!_tt.includes('active')) {
                    _tt += 'active';
                }
                setTrackTimeClass(_tt);
            }

            _audioPlayer.curMinutes = Math.floor(audio.currentTime / 60);
            _audioPlayer.curSeconds = Math.floor(audio.currentTime - _audioPlayer.curMinutes * 60);

            _audioPlayer.durMinutes = Math.floor(audio.duration / 60);
            _audioPlayer.durSeconds = Math.floor(audio.duration - _audioPlayer.durMinutes * 60);

            _audioPlayer.playProgress = (audio.currentTime / audio.duration) * 100;

            if (isNaN(_audioPlayer.curMinutes) || isNaN(_audioPlayer.curSeconds))

                setCurrentTime('00:00');
            else
                setCurrentTime(
                    ((_audioPlayer.curMinutes < 10) ? "0" : "") + _audioPlayer.curMinutes + ":" + ((_audioPlayer.curSeconds < 10) ? "0" : "") + _audioPlayer.curSeconds
                );

            if (isNaN(_audioPlayer.durMinutes) || isNaN(_audioPlayer.durSeconds))
                setTrackLength('00:00');
            else
                setTrackLength(
                    ((_audioPlayer.durMinutes < 10) ? "0" : "") + _audioPlayer.durMinutes + ":" + ((_audioPlayer.durSeconds < 10) ? "0" : "") + _audioPlayer.durSeconds
                );

            if (
                isNaN(_audioPlayer.curMinutes) ||
                isNaN(_audioPlayer.curSeconds) ||
                isNaN(_audioPlayer.durMinutes) ||
                isNaN(_audioPlayer.durSeconds)
            ) {
                if (_tt.includes('active')) {
                    _tt = _tt.replace('active', '');
                }
                setTrackTimeClass(_tt);
            }
            else {
                if (!_tt.includes('active')) {
                    _tt += 'active';
                }
                setTrackTimeClass(_tt);
            }

            setSeekBarWidth(_audioPlayer.playProgress);

            if (_audioPlayer.playProgress === 100) {
                setPlayPauseClass("fa fa-play");
                setSeekBarWidth(0);
                setCurrentTime("00:00");
                setAlbumArtClass('');
                clearInterval(buffInterval);
            }
        }
    }

    const checkBuffering = () => {
        if (_albumArt.current) {
            clearInterval(buffInterval);
            var _al = _albumArt.current!.className;

            buffInterval = setInterval(function () {
                if (_audioPlayer.nTime === 0 || _audioPlayer.bTime - _audioPlayer.nTime > 1000) {
                    if (_al.includes('buffering')) {
                        _al = _al.replace('buffering', '')
                    }
                    setAlbumArtClass(_al);
                } else {
                    if (_al.includes("buffering")) {
                        _al = _al.replace("buffering", "");
                    }
                    setAlbumArtClass(_al);
                }

                _audioPlayer.bTime = new Date().getTime();
            }, 100);
        }
    }

    const setCurrentTime = (time: string) => {
        if (_currentTime.current)
            _currentTime.current!.innerText = time;
    }

    const setTrackLength = (time: string) => {
        if (_trackLength.current)
            _trackLength.current!.innerText = time;
    }

    const setPlayPauseClass = (styleClass: string) => {
        if (_playPause.current)
            _playPause.current!.className = styleClass;
    }

    const setAlbumArtClass = (styleClass: string) => {
        if (_albumArt.current)
            _albumArt.current!.className = styleClass;
    }

    const setSeekBarWidth = (width: number) => {
        if (_seekBar.current)
            _seekBar.current!.style.width = width + "%";
    }

    const setTrackTimeClass = (styleClass: string) => {
        if (_trackTime.current)
            _trackTime.current!.className = styleClass;
    }

    useEffect(() => {
        setTimeout(() => {
            initPlayer();
        }, 1000);
    })

    return (
        <div id="player">
            <div ref={_playerTrack} id="player-track">
                <div ref={_albumName} id="album-name" />
                <div ref={_trackName} id="track-name"></div>
                <div ref={_trackTime} id="track-time">
                    <div ref={_currentTime} id="current-time"></div>
                    <div ref={_trackLength} id="track-length"></div>
                </div>
                <div id="s-area"
                    ref={_seekArea}
                    onMouseMove={(e) => { showHover(e) }}
                    onMouseOut={hideHover}
                    onClick={playFromClickedPos}>
                    <div ref={_insTime} id="ins-time" />
                    <div ref={_sHover} id="s-hover" />
                    <div ref={_seekBar} id="seek-bar" />
                </div>
            </div>
            <div id="player-content">
                <div ref={_albumArt} id="album-art">
                    <img ref={_artWork} className="active" alt='' />
                    <div id="buffer-box">Buffering ...</div>
                </div>
                <div id="player-controls">
                    <div className="control">
                        <div className="button" id="play-previous"
                            onClick={() => selectTrack(-1)}>
                            <i className="fas fa-backward" />
                        </div>
                    </div>
                    <div className="control">
                        <div className="button" id="play-pause-button"
                            onClick={playPause}>
                            <i ref={_playPause} />
                        </div>
                    </div>
                    <div className="control">
                        <div className="button" id="play-next"
                            onClick={() => { selectTrack(1) }}>
                            <i className="fas fa-forward" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvertAudioPlayer;
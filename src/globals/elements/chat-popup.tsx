/**
 * @module Element-Chat-Box
 */

import { MouseEventHandler } from "react";

/**
 * Sample Chat Box
 * @param props - object passing data and methods
 * @returns - markup for sample chat box
 */
const ChatPopup = (props: {
    /**
     * property used to set visibility of the chat box
     */
    _isVisible: boolean,

    /**
     * handler for close event
     */
    _onClose: MouseEventHandler
}) => {
    const { _isVisible, _onClose} = props;
    return (
        <div className={"chat-popup "+(_isVisible?'active':'')} id="chat-block">
            <form className="form-container">
                <h3 className="av-chat-title">Chat with us</h3>
                <textarea placeholder="Type message.." name="msg" required defaultValue={""} />
                <button type="submit" className="btn site-button-secondry">Send</button>
                <button type="button" className="btn site-button chat-close" onClick={_onClose}>Close</button>
            </form>
        </div>

    )
}
export default ChatPopup;
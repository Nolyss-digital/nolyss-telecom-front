/**
 * @module Element-App-Loader
 */

/**
 * Refresing animation between page loading
 * @returns - markup for app loader
 */
const Loader = () => {
    return (
        <div className="loading-area">
            <div className="loading-box" />
            <div className="loading-pic">
                <span className="loader" />
            </div>
        </div>
    )
}

export default Loader;

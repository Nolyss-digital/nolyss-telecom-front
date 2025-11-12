/**
 * @module Section-Contact-Form
 */

/**
 * 
 * @returns Markup for sample contact form
 */
const SectionContactForm = () => {
    return (
        <div className="cons-contact-form-wrap">
            <div className="comments-area">
                <h3 className="av-large-title mb-4">Contact Us
                </h3>
                <form className="comment-form cons-contact-form" method="post" action="phpmailer/mail.php">
                    <div className="row">
                        <div className="comment-form-author col-md-6 mb-3">
                            <label><span>Your Name</span></label>
                            <input className="form-control" type="text" name="username" placeholder="Your Name*" id="author" />
                        </div>
                        <div className="comment-form-email col-md-6 mb-3">
                            <label><span>Your Email</span></label>
                            <input className="form-control" type="text" name="email" placeholder="Your Email*" />
                        </div>
                        <div className="comment-form-comment col-md-12 mb-4">
                            <label><span>Message</span></label>
                            <textarea className="form-control" rows={8} name="message" placeholder="Message*" id="comment" defaultValue={""} />
                        </div>
                        <div className="comment-form-cookies-consent mb-4">
                            <p>
                                <span>*</span> Call us 24/7  or fill out the form below to receive a free.
                            </p>
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="site-button">Post Comment <i className="fa fa-plus" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SectionContactForm;
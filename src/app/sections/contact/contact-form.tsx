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
                <h3 className="av-large-title mb-4">Nous contacter
                </h3>
                <form className="comment-form cons-contact-form" method="post" action="phpmailer/mail.php">
                    <div className="row">
                        <div className="comment-form-author col-md-6 mb-3">
                            <label><span>Votre nom</span></label>
                            <input className="form-control" type="text" name="username" placeholder="Votre nom*" id="author" />
                        </div>
                        <div className="comment-form-email col-md-6 mb-3">
                            <label><span>Votre e-mail</span></label>
                            <input className="form-control" type="text" name="email" placeholder="Votre e-mail*" />
                        </div>
                        <div className="comment-form-comment col-md-12 mb-4">
                            <label><span>Message</span></label>
                            <textarea className="form-control" rows={8} name="message" placeholder="Message*" id="comment" defaultValue={""} />
                        </div>
                        <div className="comment-form-cookies-consent mb-4">
                            <p>
                                <span>*</span> Appelez-nous 24h/24 et 7j/7 ou remplissez le formulaire ci-dessous pour recevoir un devis gratuit.
                            </p>
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="site-button">Publier le commentaire <i className="fa fa-plus" /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SectionContactForm;
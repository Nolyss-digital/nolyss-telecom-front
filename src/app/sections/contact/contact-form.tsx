import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SectionContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = e.currentTarget; // ✅ jamais null

    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const now = new Date();
    const timeString = now.toLocaleString("fr-FR");

    emailjs
      .send(
        "service_whsymjz",
        "template_n84bclr",
        {
          name: username,
          email,
          message,
          time: timeString,
        },
        "kZFqJYVq94LmqZ0f8"
      )
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="cons-contact-form-wrap">
      <div className="comments-area">
        <h3 className="av-large-title mb-4">Nous contacter</h3>

        <form
          ref={formRef}
          className="comment-form cons-contact-form"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="comment-form-author col-md-6 mb-3">
              <label>
                <span>Votre nom</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                placeholder="Votre nom*"
                required
              />
            </div>

            <div className="comment-form-email col-md-6 mb-3">
              <label>
                <span>Votre e-mail</span>
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Votre e-mail*"
                required
              />
            </div>

            <div className="comment-form-comment col-md-12 mb-4">
              <label>
                <span>Message</span>
              </label>
              <textarea
                className="form-control"
                rows={8}
                name="message"
                placeholder="Message*"
                required
              />
            </div>

            <div className="comment-form-cookies-consent mb-4">
              <p>
                <span>*</span> Appelez-nous 24h/24 et 7j/7 ou remplissez le
                formulaire ci-dessous pour recevoir un devis gratuit.
              </p>
            </div>

            <div className="form-submit">
              <button type="submit" className="site-button" disabled={isSending}>
                {isSending ? "Envoi en cours..." : "Envoyer le message"}{" "}
                <i className="fa fa-plus" />
              </button>
            </div>

            {status === "success" && (
              <p className="mt-3 text-success">
                ✅ Votre message a bien été envoyé. Merci !
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-danger">
                ❌ Une erreur est survenue. Veuillez réessayer plus tard.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionContactForm;

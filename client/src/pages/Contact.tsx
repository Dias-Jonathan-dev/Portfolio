import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "../styles/contact.css";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_f2jvkwr",
        "template_cfofrx8",
        form.current,
        "SVzwvi_BNFsut4Gx2",
      )
      .then(
        () => setSent(true),
        () => alert("Erreur lors de l'envoi du message."),
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>
            Votre nom terrestre
            <input type="text" name="name" required />
          </label>
          <label>
            Votre mail
            <input type="email" name="mail" required />
          </label>
          <label>
            Votre transmission
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit">Envoyer la transmission</button>
          {sent && <p className="confirmation-message">Message envoyé !</p>}
        </form>
        <div className="media">
          <div className="linkedin">
            <h2>Mon Linkedin</h2>
            <a
              href="https://linkedin.com/in/jonathan-dias-163248279"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div className="github">
            <h2>Mon Github</h2>
            <a
              href="https://github.com/Dias-Jonathan-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

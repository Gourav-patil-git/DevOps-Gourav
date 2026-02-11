import "./Contact.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="contact" className="contact-section">

      {/* Animated Background */}
      <Particles
        className="particles-bg"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            move: { speed: 1 },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
            },
            opacity: { value: 0.3 },
          },
        }}
      />

      <h2 className="contact-title fade-in">Let's Connect</h2>

      <div className="contact-card fade-in">

        <p className="contact-location">
          <FontAwesomeIcon icon={faLocationDot} />
          Pune, India — Open to Relocate Anywhere in India
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:gouravbajiraopatil@gmail.com"
            className="contact-btn email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Send Email
          </a>

          <a
            href="https://wa.me/+919309869338"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/gourav-patil-5aaa48214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/Gourav-patil-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

      </div>
    </section>
  );
}

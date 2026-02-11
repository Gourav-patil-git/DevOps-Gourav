import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-about">
          <h3>Gourav Patil</h3>
          <p>
            Cloud & DevOps Enthusiast | AWS Certified Cloud Practitioner  
            Passionate about automation, scalable infrastructure & modern web development.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</li>
            <li onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</li>
            <li onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</li>
            <li onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Pune, India
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> gouravbajiraopatil@gmail.com
          </p>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/gourav-patil-5aaa48214/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Gourav-patil-git" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Gourav Patil | Built with React 
      </div>
    </footer>
  );
}

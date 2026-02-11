import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faServer, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <section className="home-section">
      {/* Background Particles */}
      <div className="particles-bg"></div>

      <div className="home-content">
        <h1>
          Hi, I'm <span>Gourav Patil</span>
        </h1>
        <h2>
          <span className="typing">Cloud Enthusiast | DevOps Engineer | Web Developer</span>
        </h2>

        <p>
          Passionate about building scalable cloud infrastructure, automating workflows,
          and creating seamless web experiences.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>

        <div className="tech-icons">
          <FontAwesomeIcon icon={faCloud} />
          <FontAwesomeIcon icon={faServer} />
          <FontAwesomeIcon icon={faCodeBranch} />
        </div>
      </div>
    </section>
  );
}

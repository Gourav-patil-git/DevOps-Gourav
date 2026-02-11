import "./About.css";
import profileImg from "./profile.png"; // put your image in src folder

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="My Photo" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi 👋 I’m <span>Gourav Patil</span>, a passionate web developer who loves
            building clean, responsive, and user-friendly websites. I enjoy
            working with modern technologies and turning ideas into reality.
          </p>

          <p>
            My focus is on writing clean code, creating smooth UI experiences,
            and continuously learning new tools and frameworks.
          </p>

         <button onClick={() => {
             document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Contact Me
          </button>

        </div>
      </div>
    </section>
  );
}

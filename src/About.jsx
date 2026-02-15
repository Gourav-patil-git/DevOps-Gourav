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
            Hi, I’m <span>Gourav Patil</span>, a passionate Web Developer and Cloud & DevOps enthusiast. 
            I love building scalable, responsive, and user-friendly web applications while leveraging modern cloud technologies.
          </p>

          <p>
            I have completed my <strong>MCA (Master of Computer Applications) 2025 </strong> 
            and earned the <strong>AWS Certified Cloud Practitioner</strong> certification. 
            My focus is on cloud computing, automation, and creating seamless digital experiences.
          </p>
          <p>
            I am skilled in key <strong>DevOps tools</strong> including: 
            <span> Docker, Kubernetes, Jenkins, Git, Terraform, Ansible, CI/CD pipelines, Linux, Shell Scripting, AWS</span>. 
            I enjoy designing automated workflows, managing infrastructure efficiently, and optimizing software delivery.
          </p>
          <p>
            I love learning new technologies, solving complex problems, and turning ideas into real-world solutions with clean, efficient code.
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

import React from "react";
import "./Skills.css";

// Import your images for tools
import awsImg from "./images/awsImg.png";
import dockerImg from "./images/dockerImg.jpg";
import k8sImg from "./images/k8sImg.png";
import jenkinsImg from "./images/jenkinsImg.png";
import gitImg from "./images/gitImg.jpg";
import terraformImg from "./images/terraformImg.png";
import ansibleImg from "./images/ansibleImg.png";
import linuxImg from "./images/linuxImg.jpg"; // Add Linux icon image

export default function Skills() {
  const skills = [
    { name: "AWS", image: awsImg },
    { name: "Docker", image: dockerImg },
    { name: "Kubernetes", image: k8sImg },
    { name: "Jenkins", image: jenkinsImg },
    { name: "Git", image: gitImg },
    { name: "Terraform", image: terraformImg },
    { name: "Ansible", image: ansibleImg },
    { name: "Linux", image: linuxImg }, // Added Linux
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card fade-in">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

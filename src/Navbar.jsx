import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Gourav Patil</div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li onClick={() => handleClick("home")}>Home</li>
        <li onClick={() => handleClick("about")}>About</li>
        <li onClick={() => handleClick("skills")}>Skills</li>
        <li onClick={() => handleClick("education")}>Education</li>
        <li onClick={() => handleClick("contact")}>Contact</li>
      </ul>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

import React from "react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Gourav's Portfolio</div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/About.jsx">About</a>
        <a href="#">Services</a>
        <a href="/Education.jsx">Contact</a>
      </div>

      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

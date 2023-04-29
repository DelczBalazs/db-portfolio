import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="container">
        <div className="navButtons socialLinks">
          <a href="/#projects">Projects</a>
          <a href="/#contact">Contact</a>
        </div>

        <div className="navLinks">
          <a href="https://www.linkedin.com/in/delczegbalazs/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/delczbalazs" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </nav>
    </>
  );
};

export default Header;

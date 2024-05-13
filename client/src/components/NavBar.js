import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="d-flex flex-column justify-content-md-between min-vh-md-100 sticky-top">
      <div>
        <div className="header py-5">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-brand display-1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Jack Gusler
          </Link>
          <h3>Software Engineer</h3>
          <p>A little bio about myself...</p>
        </div>
        <div className="content d-none d-md-block">
          <div style={{ width: "75px", textAlign: "left" }}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="footer py-0 py-md-5">
        <a
          href="https://github.com/jackgusler"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x" style={{ color: "black" }}></i>
        </a>
        <a
          href="https://linkedin.com/in/jack-gusler"
          className="me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x" style={{ color: "black" }}></i>
        </a>
        <a href="mailto:jackgusler16@gmail.com" className="me-3">
          <i className="fas fa-envelope fa-2x" style={{ color: "black" }}></i>
        </a>
      </div>
    </div>
  );
};

export default NavBar;

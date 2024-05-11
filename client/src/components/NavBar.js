import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="sticky-top top-0 d-flex flex-column vh-100">
      <div className="header py-5">
        <h1 className="nav-brand">Jack Gusler</h1>
        <h2>Software Engineer</h2>
        <p>A little bio about myself...</p>
      </div>
      <div className="content">
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
      <div className="footer py-5 mt-auto">
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

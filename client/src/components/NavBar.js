import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>Jack Gusler</h1>
        <h2>Software Engineer</h2>
        <p>A little bio about myself...</p>
      </div>
      <div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Home
        </Link>
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
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

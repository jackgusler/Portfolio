import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const allSkills = [
    // Languages
    {
      name: "JavaScript",
      logo: "https://simpleicons.org/icons/javascript.svg",
    },
    { name: "Python", logo: "https://simpleicons.org/icons/python.svg" },
    { name: "HTML", logo: "https://simpleicons.org/icons/html5.svg" },
    // Frontend Frameworks
    { name: "Vue.js", logo: "https://simpleicons.org/icons/vuedotjs.svg" },
    { name: "React", logo: "https://simpleicons.org/icons/react.svg" },
    { name: "Bootstrap", logo: "https://simpleicons.org/icons/bootstrap.svg" },
    { name: "CSS", logo: "https://simpleicons.org/icons/css3.svg" },
    // Backend Frameworks
    { name: "Node.js", logo: "https://simpleicons.org/icons/nodedotjs.svg" },
    { name: "Express", logo: "https://simpleicons.org/icons/express.svg" },
    { name: "Flask", logo: "https://simpleicons.org/icons/flask.svg" },
    // Databases
    { name: "MongoDB", logo: "https://simpleicons.org/icons/mongodb.svg" },
    { name: "SQLite", logo: "https://simpleicons.org/icons/sqlite.svg" },
    // Cloud Services
    {
      name: "DynamoDB",
      logo: "https://simpleicons.org/icons/amazondynamodb.svg",
    },
    { name: "Lambda", logo: "https://simpleicons.org/icons/awslambda.svg" },
    // Version Control
    { name: "Git", logo: "https://simpleicons.org/icons/git.svg" },
    { name: "GitHub", logo: "https://simpleicons.org/icons/github.svg" },
    // API Testing & Development
    { name: "Postman", logo: "https://simpleicons.org/icons/postman.svg" },
    // Group Organization
    { name: "Jira", logo: "https://simpleicons.org/icons/jira.svg" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="skills" className="container">
      <h2>Skills</h2>
      <div style={{ maxWidth: "100%" }}>
        <Carousel responsive={responsive} infinite={true}>
          {allSkills.map((skill) => (
            <div className="item">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={skill.logo}
                  style={{ width: "50px", height: "50px" }}
                />
                <h5>{skill.name}</h5>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;

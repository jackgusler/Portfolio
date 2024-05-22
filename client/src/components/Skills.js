import React from "react";
import Marquee from "react-fast-marquee";

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

  return (
    <div id="skills" className="container pb-5">
      <h2 className="pb-3 d-none d-md-block">Skills</h2>
      <div className="sticky-header-container">
        <h2 className="py-3 sticky-header d-block d-md-none">Skills</h2>
      </div>
      <Marquee
        pauseOnHover={true}
        gradient={true}
        gradientWidth={175}
        speed={40}
      >
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center px-4"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              style={{ width: "50px", height: "50px" }}
            />
            <h5>{skill.name}</h5>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;

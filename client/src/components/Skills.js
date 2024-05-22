import React, { useState, useEffect } from "react";
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
    // Deployment
    { name: "Render", logo: "https://simpleicons.org/icons/render.svg" },
    { name: "Vercel", logo: "https://simpleicons.org/icons/vercel.svg" },
    // Version Control
    { name: "Git", logo: "https://simpleicons.org/icons/git.svg" },
    { name: "GitHub", logo: "https://simpleicons.org/icons/github.svg" },
    // API Testing & Development
    { name: "Postman", logo: "https://simpleicons.org/icons/postman.svg" },
    // Group Organization
    { name: "Jira", logo: "https://simpleicons.org/icons/jira.svg" },
  ];

  const [gradientWidth, setGradientWidth] = useState(175);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Adjust this to the breakpoint you want
        setGradientWidth(100);
      } else {
        setGradientWidth(175);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the gradient width based on the initial viewport width

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setGradientWidth(100);
      } else {
        setIsMobile(false);
        setGradientWidth(175);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the gradient width based on the initial viewport width

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
  }, []);

  return (
    <div id="skills" className="container pb-5">
      <h2 className="pb-3 d-none d-md-block">Skills</h2>
      <div className="sticky-header-container">
        <h2 className="py-3 sticky-header d-block d-md-none">Skills</h2>
      </div>
      <Marquee
        pauseOnHover={!isMobile}
        gradient={true}
        gradientWidth={gradientWidth}
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

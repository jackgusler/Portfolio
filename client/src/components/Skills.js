import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Marquee from "react-fast-marquee";

import { ReactComponent as JavaScript } from "../skills_logos/javascript.svg";
import { ReactComponent as Python } from "../skills_logos/python.svg";
import { ReactComponent as HTML } from "../skills_logos/html5.svg";
import { ReactComponent as Cplusplus } from "../skills_logos/cplusplus.svg";
import { ReactComponent as Vue } from "../skills_logos/vuedotjs.svg";
import { ReactComponent as ReactLogo } from "../skills_logos/react.svg";
import { ReactComponent as Bootstrap } from "../skills_logos/bootstrap.svg";
import { ReactComponent as Tailwind } from "../skills_logos/tailwindcss.svg";
import { ReactComponent as CSS } from "../skills_logos/css3.svg";
import { ReactComponent as Node } from "../skills_logos/nodedotjs.svg";
import { ReactComponent as Express } from "../skills_logos/express.svg";
import { ReactComponent as Flask } from "../skills_logos/flask.svg";
import { ReactComponent as MongoDB } from "../skills_logos/mongodb.svg";
import { ReactComponent as SQLite } from "../skills_logos/sqlite.svg";
import { ReactComponent as DynamoDB } from "../skills_logos/amazondynamodb.svg";
import { ReactComponent as Lambda } from "../skills_logos/awslambda.svg";
import { ReactComponent as Vercel } from "../skills_logos/vercel.svg";
import { ReactComponent as Render } from "../skills_logos/render.svg";
import { ReactComponent as Git } from "../skills_logos/git.svg";
import { ReactComponent as GitHub } from "../skills_logos/github.svg";
import { ReactComponent as Postman } from "../skills_logos/postman.svg";
import { ReactComponent as Jira } from "../skills_logos/jira.svg";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "white" : "black";

  const allSkills = [
    // Languages
    { name: "JavaScript", logo: JavaScript },
    { name: "Python", logo: Python },
    { name: "HTML", logo: HTML },
    { name: "C++", logo: Cplusplus },
    // Frontend Frameworks
    { name: "Vue.js", logo: Vue },
    { name: "React", logo: ReactLogo },
    { name: "Bootstrap", logo: Bootstrap },
    { name: "Tailwind", logo: Tailwind },
    { name: "CSS", logo: CSS },
    // Backend Frameworks
    { name: "Node.js", logo: Node },
    { name: "Express", logo: Express },
    { name: "Flask", logo: Flask },
    // Databases
    { name: "MongoDB", logo: MongoDB },
    { name: "SQLite", logo: SQLite },
    // Cloud Services
    { name: "DynamoDB", logo: DynamoDB },
    { name: "Lambda", logo: Lambda },
    // Deployment
    { name: "Vercel", logo: Vercel },
    { name: "Render", logo: Render },
    // Version Control
    { name: "Git", logo: Git },
    { name: "GitHub", logo: GitHub },
    // Tools
    { name: "Postman", logo: Postman },
    { name: "Jira", logo: Jira },
  ];

  const gradientColor = theme === "dark" ? "#121212" : "#f8f9fa";

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
      <h2 className={`${theme} pb-3 d-none d-md-block`}>Skills</h2>
      <div className={`sticky-header-container ${theme}`}>
        <h2
          className={`${theme} py-3 sticky-header-${theme} d-block d-md-none`}
        >
          Skills
        </h2>
      </div>
      <Marquee
        pauseOnHover={!isMobile}
        gradient={true}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
        speed={40}
      >
        {allSkills.map((skill, index) => {
          const Logo = skill.logo;
          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center px-4"
            >
              <Logo fill={color} style={{ width: "50px", height: "50px" }} />
              <h5 className={`skill-name ${theme}`}>{skill.name}</h5>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Skills;

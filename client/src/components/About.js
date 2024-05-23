import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="about" className="container py-5">
      <h2 className={`${theme} pb-3 d-none d-md-block`}>About</h2>
      <div className={`sticky-header-container ${theme}`}>
        <h2 className={`${theme} py-3 sticky-header-${theme} d-block d-md-none`}>
          About
        </h2>
      </div>
      <p className={theme}>
        From a young age, technology has always fascinated me. When I took my
        first computer science class in high school, it was love at first '
        <b>code</b>'. I quickly learned that the thrills of{" "}
        <b>problem-solving</b> and creating something from nothing was
        addicting, and I have been <b>programming</b> ever since.
      </p>
      <p className={theme}>
        I'm <b>actively seeking job opportunities</b> while concurrently working
        on various projects to further develop my skills and knowledge. I am
        very excited to get out into the world and start my career as a{" "}
        <b>software engineer</b>!
      </p>
      <p className={theme}>
        When I'm not immersed in code, you can catch me going on hikes with
        friends, watching shows with my girlfriend and two cats, or cheering for
        the <span className="ranger">Rangers</span>!
      </p>
    </div>
  );
};

export default About;

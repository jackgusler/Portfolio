import React, { useContext } from "react";
import ReactGA from "react-ga4";
import { ThemeContext } from "../context/ThemeContext";

const handleMouseEnter = (e) => {
  if (window.innerWidth > 768) {
    e.currentTarget.parentNode.parentNode.classList.add("card-hovered");
  }
};

const handleMouseLeave = (e) => {
  if (window.innerWidth > 768) {
    e.currentTarget.parentNode.parentNode.classList.remove("card-hovered");
  }
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const handleProjectClick = (url, projectName) => {
    ReactGA.event({
      category: "Project",
      action: `Clicked on ${projectName}`,
    });
    window.open(url, "_blank");
  };

  return (
    <div id="projects" className="container pb-5">
      <h2 className={`${theme} pb-3 d-none d-md-block`}>Projects</h2>
      <div className={`sticky-header-container ${theme}`}>
        <h2
          className={`${theme} py-3 sticky-header-${theme} d-block d-md-none`}
        >
          Projects
        </h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className={`card ${theme} mb-4`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              handleProjectClick(
                "https://github.com/jackgusler/ConcertSyncify",
                "Concert Syncify"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h5 className={`card-title ${theme}`}>
                Concert Syncify
                <i
                  className="fa-solid fa-link"
                  style={{ fontSize: "0.8em", marginLeft: "0.5em" }}
                ></i>
              </h5>
              <h6 className={`card-subtitle ${theme} mb-2`}>
                June 2024 — July 2024
              </h6>
              <p className={`card-text ${theme}`}>
                Developed a full-stack web application integrating Spotify,
                Ticketmaster, and Google Calendar APIs to help users track and
                manage upcoming concerts of their favorite artists or genres,
                using Jira for project management and task tracking. Implemented
                OAuth2 authentication for Spotify and Google, and managed user
                sessions with JWT, ensuring secure data access. Designed a
                responsive and interactive frontend with Vue.js and Bootstrap,
                and created a backend API with Express to handle data fetching,
                rate limiting, and error handling.
              </p>
              <div className="card-skills">
                <span className={`skill-tag ${theme}`}>Vue.js</span>
                <span className={`skill-tag ${theme}`}>Bootstrap</span>
                <span className={`skill-tag ${theme}`}>Node.js</span>
                <span className={`skill-tag ${theme}`}>Express.js</span>
                <span className={`skill-tag ${theme}`}>AWS DynamoDB</span>
                <span className={`skill-tag ${theme}`}>AWS Lambda</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className={`card ${theme} mb-4`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              handleProjectClick(
                "https://github.com/sunyhydralab/QView3D",
                "3D-Printer Queuing Software"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h5 className={`card-title ${theme}`}>
                3D-Printer Queuing Software
                <i
                  className="fa-solid fa-link"
                  style={{ fontSize: "0.8em", marginLeft: "0.5em" }}
                ></i>
              </h5>
              <h6 className={`card-subtitle ${theme} mb-2`}>
                January 2024 — May 2024
              </h6>
              <p className={`card-text ${theme}`}>
                Implemented Scrum framework with Atlassian’s Jira and Git
                Version control for software development for the Hudson Valley
                Advanced Manufacturing Center. Designed using
                Model-View-Controller pattern, integrating multi-threading and
                web sockets for frontend to backend communication for an array
                of 3D printers.
              </p>
              <div className="card-skills">
                <span className={`skill-tag ${theme}`}>Vue.js</span>
                <span className={`skill-tag ${theme}`}>Bootstrap</span>
                <span className={`skill-tag ${theme}`}>Node.js</span>
                <span className={`skill-tag ${theme}`}>Flask</span>
                <span className={`skill-tag ${theme}`}>SQLite</span>
                <span className={`skill-tag ${theme}`}>Jira</span>
                <span className={`skill-tag ${theme}`}>GitHub</span>
                <span className={`skill-tag ${theme}`}>Agile</span>
                <span className={`skill-tag ${theme}`}>Scrum</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className={`card ${theme}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              handleProjectClick(
                "https://github.com/draktovus/pos-restaurant",
                "Point of Sale System"
              )
            }
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h5 className={`card-title ${theme}`}>
                Point of Sale System
                <i
                  className="fa-solid fa-link"
                  style={{ fontSize: "0.8em", marginLeft: "0.5em" }}
                ></i>
              </h5>
              <h6 className={`card-subtitle ${theme} mb-2`}>
                January 2023 — May 2023
              </h6>
              <p className={`card-text ${theme}`}>
                Contributed significantly to a collaborative team effort in
                developing an innovative Point of Sale (POS) system. Produced
                detailed system architecture diagrams and documented project
                work, facilitating smooth comprehension and knowledge transfer
                among team members.
              </p>
              <div className="card-skills">
                <span className={`skill-tag ${theme}`}>Vue.js</span>
                <span className={`skill-tag ${theme}`}>Bulma</span>
                <span className={`skill-tag ${theme}`}>Node.js</span>
                <span className={`skill-tag ${theme}`}>Express.js</span>
                <span className={`skill-tag ${theme}`}>MongoDB</span>
                <span className={`skill-tag ${theme}`}>Render</span>
                <span className={`skill-tag ${theme}`}>Agile</span>
                <span className={`skill-tag ${theme}`}>Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-projects-section mt-3">
        <h3 className={`${theme}`}>More Projects</h3>
        <div>
          <div className="small-project">
            <a
              href="https://github.com/jackgusler/SoundBytes"
              target="_blank"
              rel="noreferrer"
              className={`${theme}`}
            >
              BakkesMod Plugin
              <i className="fa-solid fa-link small-project-link"></i>
            </a>
          </div>
        </div>
        <div>
          <div className="small-project">
            <a
              href="https://github.com/jackgusler/NonoSports"
              target="_blank"
              rel="noreferrer"
              className={`${theme}`}
            >
              Sport Nonograms
              <i className="fa-solid fa-link small-project-link"></i>
            </a>
          </div>
        </div>
        <div>
          <div className="small-project">
            <a
              href="https://github.com/jackgusler/BankTrace"
              target="_blank"
              rel="noreferrer"
              className={`${theme}`}
            >
              Bank Trace
              <i className="fa-solid fa-link small-project-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

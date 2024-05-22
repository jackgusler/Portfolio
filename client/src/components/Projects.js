import React from "react";

const handleMouseEnter = (e) => {
  e.currentTarget.parentNode.parentNode.classList.add("card-hovered");
};

const handleMouseLeave = (e) => {
  e.currentTarget.parentNode.parentNode.classList.remove("card-hovered");
};

const Projects = () => {
  return (
    <div id="projects" className="container pb-5">
      <div className="sticky-header">
        <h2 className="pb-3">Projects</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="card project-card mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">3D-Printer Queuing Software</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                January 2024 — May 2024
              </h6>
              <p className="card-text">
                Implemented Scrum framework with Atlassian’s Jira and Git
                Version control for software development for the Hudson Valley
                Advanced Manufacturing Center. Designed using
                Model-View-Controller pattern, integrating multi-threading and
                web sockets for front-end to back-end communication for an array
                of 3D printers.
              </p>
              <div className="card-skills">
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Scrum</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="card project-card mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">Budgeting Website Application</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                October 2023 — November 2023
              </h6>
              <p className="card-text">
                Created a mobile budgeting application with user-friendly
                functionalities for tracking expenses, setting goals, and
                visualizing data. Integrated AWS DynamoDB to store and oversee
                user data for the web-based platform, enhancing system
                efficiency and performance, hosting it via AWS Lambda functions
                for scalability and cost-effectiveness.
              </p>
              <div className="card-skills">
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Bulma</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">AWS DynamoDB</span>
                <span className="skill-tag">AWS Lambda</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="card project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <h5 className="card-title">Point of Sale System</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                January 2023 — May 2023
              </h6>
              <p className="card-text">
                Contributed significantly to a collaborative team effort in
                developing an innovative Point of Sale (POS) system. Produced
                detailed system architecture diagrams and documented project
                work, facilitating smooth comprehension and knowledge transfer
                among team members.
              </p>
              <div className="card-skills">
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Bulma</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Render</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

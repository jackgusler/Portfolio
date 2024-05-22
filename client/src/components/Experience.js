import React from "react";

const handleMouseEnter = (e) => {
  e.currentTarget.parentNode.parentNode.classList.add("card-hovered");
};

const handleMouseLeave = (e) => {
  e.currentTarget.parentNode.parentNode.classList.remove("card-hovered");
};

const Experience = () => {
  return (
    <div id="experience" className="container pb-5">
      <h2 className="pb-3 d-none d-md-block">Experience</h2>
      <div className="sticky-header-container">
        <h2 className="py-3 sticky-header d-block d-md-none">Experience</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            className="card mb-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h5 className="card-title">SMD Media</h5>
                <img
                  src={process.env.PUBLIC_URL + "/smd2.png"}
                  alt="SMD Media Logo"
                  style={{
                    height: "2rem",
                    marginLeft: "10px",
                    position: "relative",
                    bottom: "10px",
                  }}
                />
              </div>
              <h6 className="card-subtitle mb-2 text-muted">
                May 2023 — August 2023
              </h6>
              <p className="card-text">
                I conducted comprehensive market research and analysis, which
                supported the creation of effective marketing materials and
                campaigns. My contributions to strategy development were
                significant, actively engaging with clients to gather valuable
                feedback. I optimized operational efficiency by enhancing order
                entry, invoicing, and account functions by maintaining Excel
                spreadsheets and generating monthly reports.
                <br />
                <br />I took this opportunity to learn more about the business
                side of working in a company, as well as to improve my
                communication skills. I believe that the experience I gained
                will be valuable in my future career and the companies I work
                for.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h5 className="card-title">LocalLive</h5>
                <img
                  src={process.env.PUBLIC_URL + "/locallive2.jpg"}
                  alt="LocalLive Logo"
                  style={{
                    height: "2rem",
                    position: "relative",
                    bottom: "10px",
                  }}
                />
              </div>
              <h6 className="card-subtitle mb-2 text-muted">
                September 2023 — April 2024
              </h6>
              <p className="card-text">
                Filmed and broadcasted live sport events, including middle
                school, high school, and college, all from my desk. Produced
                over 100 high-quality recordings, maintaining a 4.9/5-star
                rating from customers. I also communicated with administrators
                through Discord in a timely and professional manner.
                <br />
                <br />
                This experience allowed me to enhance my communication skills
                and learn effective collaboration with coworkers in a fast-paced
                environment. I also learned how to work with a team remotely,
                which is a valuable skill in today's world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

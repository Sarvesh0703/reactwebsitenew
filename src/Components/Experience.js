import React from "react";
import "./ExperienceStyles.css";

function Experience() {
  return (
    <div className="experience-profile">
      <div className="container">
        <div className="expe-box">
          <div className="expe-title">
            <h2 className="top-heading">Experience</h2>
            <p>
              Let us know what you're looking for in an agency. We'll take a
              look and see if this could be the start of something beautiful.
            </p>
          </div>
        </div>
        <div className="experience-content">
          <div className="main-timeline">
            <ul>
              <li>
                <div className="single-timeline-box fix">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="experience-time text-right">
                        <h2>From 22-04-2024 to Present</h2>
                        <h3>UI/UX Designer</h3>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                      <div className="timeline">
                        <div className="timeline-content">
                          <h4 className="title">
                            <span>
                              <i className="fa fa-circle" aria-hidden="true"></i>
                            </span>{" "}
                            MAWAI INFOTECH LTD.
                          </h4>
                          <h5>Noida, Sector-63</h5>
                          <p className="description">
                            {" "}
                            Providing ERP Consultancy (Product Base Company).
                            Mawai, a leading SAP S/4HANA consultancy in Noida,
                            offers 25+ years of expertise and innovative
                            solutions to unlock your business potential.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="single-timeline-box fix">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="experience-time text-right">
                        <h2>From 01-12-2022 To 12-01-2024</h2>
                        <h3>UI/UX Designer</h3>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                      <div className="timeline">
                        <div className="timeline-content">
                          <h4 className="title">
                            <span>
                              <i className="fa fa-circle" aria-hidden="true"></i>
                            </span>{" "}
                            SAGAR INFORMATICS PVT. LTD.
                          </h4>
                          <h5>Munirka, New Delhi</h5>
                          <p className="description">
                            {" "}
                            Providing Web Design and Development services to
                            Fortune 200 Companies across varied Domains
                            Including Online Product Designer Tool, E-commerce
                            Website, CMS, Mobile Application for iPhone, iPad,
                            Android devices
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

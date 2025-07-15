import React from "react";
import "./EducationStyles.css";

function Education() {
  return (
    <section id="education" class="education">
      <div class="container">
        <div class="education-horizontal-timeline">
          <div class="row">
            <div class="expe-box">
              <div class="expe-title">
                <h2 className="top-heading">Education</h2>
                <p>
                  Let us know what you're looking for in an agency. We'll take a
                  look and see if this could be the start of something
                  beautiful.
                </p>
              </div>
            </div>
            <div className="experience-content">
              <div className="row">
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2016 - 2017</h2>
                      <h3>
                        High School
                      </h3>
                    </div>
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                      <span class="single-timeline-horizontal"></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">B.P. Inter College, Sultanpur</h4>
                        <h5>UP Board</h5>
                        <p class="description">
                          {" "}
                          Duis aute irure dolor in reprehenderit in vol patate
                          velit esse cillum dolore eu fugiat nulla pari.
                          Excepteur sint occana inna tecat cupidatat non
                          proident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2018 - 2019</h2>
                      <h3>
                      Intermediate
                      </h3>
                    </div>
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                      <span class="single-timeline-horizontal"></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">G.I.C. Sultanpur</h4>
                        <h5>UP Board</h5>
                        <p class="description">
                          {" "}
                          Duis aute irure dolor in reprehenderit in vol patate
                          velit esse cillum dolore eu fugiat nulla pari.
                          Excepteur sint occana inna tecat cupidatat non
                          proident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2019 - 2022</h2>
                      <h3>
                        Diploma in Computer Science
                      </h3>
                    </div>
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      <span class="single-timeline-horizontal spacial-horizontal-line"></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">Government Polytechnic Premdharpatti Pratapgarh Uttar Pradesh.</h4>
                        <h5>BTEUP Board</h5>
                        <p class="description">
                          Duis aute irure dolor in reprehenderit in vol patate
                          velit esse cillum dolore eu fugiat nulla pari.
                          Excepteur sint occana inna tecat cupidatat non
                          proident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

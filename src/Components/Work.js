import "./WorkStyle.css";
import React from "react";
import star_icon from "../assets/star.svg";

const Work = () => {
  return (
    <section className="sections mb-3">
      <div className="section-wrapper work-us" id="4">
        <div className="container">
          <div className="section-tag">
            {/* <div>How we work</div> */}
            <div class="hero-badge"><img src={star_icon} loading="lazy" style={{width: '15px'}} alt=""/>
            <div>How we work</div>
            </div>
            <div className="section-tag-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>
                  First impressions matter, so your website should look great
                  and perform perfectly
                </h2>
                <div>How we, together, build the perfect website</div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-card">
                <div className="work-card-title">1.&nbsp;&nbsp; Discovery</div>
                <p className="process-card-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sedipsum urna. Pellentesque laoreet dolor et mi
                  faucibus maximus et eu elit. consectetur adipiscing elit.
                  Suspendisse sed ipsum urna
                </p>
              </div>
              <div className="work-card">
                <div className="work-card-title">2.&nbsp;&nbsp; Wireframe & design</div>
                <p className="process-card-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sedipsum urna. Pellentesque laoreet dolor et mi
                  faucibus maximus et eu elit. consectetur adipiscing elit.
                  Suspendisse sed ipsum urna
                </p>
              </div>
              <div className="work-card">
                <div className="work-card-title">3.&nbsp;&nbsp; Development</div>
                <p className="process-card-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sedipsum urna. Pellentesque laoreet dolor et mi
                  faucibus maximus et eu elit. consectetur adipiscing elit.
                  Suspendisse sed ipsum urna
                </p>
              </div>
              <div className="work-card">
                <div className="work-card-title">4.&nbsp;&nbsp; Handover & Aftercare</div>
                <p className="process-card-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sedipsum urna. Pellentesque laoreet dolor et mi
                  faucibus maximus et eu elit. consectetur adipiscing elit.
                  Suspendisse sed ipsum urna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

import React from "react";
import "./TechnologyStyle.css";
import tech_image_1 from "../assets/html.png";
import tech_image_2 from "../assets/css3.png";
import tech_image_3 from "../assets/javascript.webp";
import tech_image_4 from "../assets/photoshop.png";
import tech_image_5 from "../assets/react-js.png";
import tech_image_6 from "../assets/nodejs.svg";
import tech_image_7 from "../assets/Postgresql.png";
import tech_image_8 from "../assets/wix.png";
import tech_image_9 from "../assets/canva.png";

const Technology = () => {
  return (
    <section className="technology" id="3">
      <div className="section-wrapper g-design">
        <div className="container">
          {/* <div className="section-tag">
            <div class="hero-badge"><img src={star_icon} loading="lazy" style={{width: '15px'}} alt=""/>
            <div>Technologies I Work With</div>
            </div>
            <div className="section-tag-line"></div>
          </div> */}
          <div class="top-heading text-center">
            <h2>
              Technologies I Work With
            </h2>
            <p>Modern tools for modern solutions</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="technology-img">
                <div className="image-box">
                  <img
                    src={tech_image_1}
                    style={{ width: "70px", height: "70px", padding: "16px" }}
                    alt=""
                    className="html-box"
                  />
                  <span class="text-sm-tech">HTML5</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_2} alt="" />
                  <span class="text-sm-tech">CSS3</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_3} alt="" />
                  <span class="text-sm-tech">JavaScript</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_4} alt="" />
                  <span class="text-sm-tech">Photoshop</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_5} alt="" />
                  <span class="text-sm-tech">React js</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_6} alt="" />
                  <span class="text-sm-tech">Node js</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_7} alt="" />
                  <span class="text-sm-tech">PostgreSQL</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_8} alt="" />
                  <span class="text-sm-tech">Wix</span>
                </div>
                <div className="image-box">
                  <img src={tech_image_9} alt="" />
                  <span class="text-sm-tech">Canva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

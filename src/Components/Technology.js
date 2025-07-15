import React from "react";
import "./TechnologyStyle.css";
import tech_image_1 from "../assets/html.png";
import tech_image_2 from "../assets/css3.png";
import tech_image_3 from "../assets/javascript.webp";
import tech_image_4 from "../assets/photoshop.png";
import tech_image_5 from "../assets/react-js.png";
import tech_image_6 from "../assets/nodejs.svg";
import tech_image_7 from "../assets/Postgresql.png";
import star_icon from "../assets/star.svg";

const Technology = () => {
  return (
    <section className="technology" id="3">
      <div className="section-wrapper g-design">
        <div className="container">
          <div className="section-tag">
            {/* <div>Technology</div> */}
            <div class="hero-badge"><img src={star_icon} loading="lazy" style={{width: '15px'}} alt=""/>
            <div>Technology</div>
            </div>
            <div className="section-tag-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="technology-img">
                <div className="image-box">
                  <img src={tech_image_1} style={{ width: "80px", height: "80px",  padding: "17px" }} alt="" className="html-box" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

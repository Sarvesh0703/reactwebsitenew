import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped, Typed } from "react-typed";
import { GoArrowUpRight } from "react-icons/go";
import resume from '../assets/cv_sarvesh.pdf';

const HeroImg = () => {

  const handleDownload = () => {
    fetch(resume)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="hero" id="1">
      {/* <div className="row">
        <div className="col-lg-12">
          <div className="content">
            
          </div>
        </div>
      </div> */}
      <div className="main-content">
        <div className="content">
          <p style={{fontStyle: 'italic'}}>Welcome</p>
            <h1>Hi, 👋 I’m Sarvesh, a Web Designer.</h1>
          <div className="type_txt">
            <ReactTyped
              strings={[
                "UI/UX Designer",
                "Graphic Designer",
                "React Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p
            className="title_txt"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              textTransform: "none",
              lineHeight: "24px",
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            We are a new design studio based in USA. We have over 2+ years of{" "}
            <br />
            combined experience, and know a thing or two about designing <br />{" "}
            website and mobile apps.
          </p>
          <div className="button_group mt-4">
            <Link to="/" onClick={handleDownload} className="customButton">
              Download CV
              <GoArrowUpRight className="arrow" />
            </Link>
            <Link to="/" class="customButton">
              Contact Us <GoArrowUpRight className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

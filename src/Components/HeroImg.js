import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped, Typed } from "react-typed";
import { GoArrowUpRight } from "react-icons/go";
import resume from "../assets/cv_sarvesh.pdf";

const HeroImg = () => {
  const handleDownload = () => {
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
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
          <div className="round-box">
            <div className="circle-bg">
              <span>Welcome</span>
            </div>
          </div>
          <h1>Hi, 👋 I’m Sarvesh, a Web Developer.</h1>
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
              marginBottom: "40px",
              color: "#fff",
            }}
          >
            We are a new design studio based in USA. We have over 2+ years of{" "}
            combined experience, and know a thing or two about designing{" "}
            website and mobile apps.
          </p>
          <div className="button_group mt-5">
            <Link
              to="/"
              onClick={handleDownload}
              className="customButton button-1"
            >
              <span>Download CV</span>
              <GoArrowUpRight className="arrow" />
            </Link>
            <Link to="/" class="customButton button-2">
              <span>Contact Us</span>
              <GoArrowUpRight className="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

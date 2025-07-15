import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import facebook_icon from "../assets/Facebook_icon.png";
import instagram_icon from "../assets/Instagram_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";
import youtube_icon from "../assets/youtube_icon.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 foot_bottom_1">
              <p className="foot_bottom">
                &copy;2025 Code. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="social-box">
                <ul className="social-icons">
                  <li>
                    <Link>
                      <img src={facebook_icon} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={instagram_icon} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={linkedin_icon} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img src={youtube_icon} className="y_tube" style={{width: '36px', height: '36px'}} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

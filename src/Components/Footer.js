import "./FooterStyles.css";
import { Link } from "react-router-dom";
import React from "react";
// import facebook_icon from "../assets/Facebook_icon.png";
// import instagram_icon from "../assets/Instagram_icon.png";
// import linkedin_icon from "../assets/linkedin_icon.png";
// import youtube_icon from "../assets/youtube_icon.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
                      <FaFacebookF className="facebook-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaLinkedinIn className="linkedin-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaInstagram className="instagram-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaYoutube className="youtube-icon" />
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

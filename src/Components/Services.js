import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa6";
import { FiCrop } from "react-icons/fi";
import { FaAppStore } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import star_icon from "../assets/star.svg";

const Services = () => {
  return (
    <section className="services" id="3">
      <div className="section-wrapper g-design">
        <div className="container">
          <div className="section-tag">
            <div class="hero-badge"><img src={star_icon} loading="lazy" style={{width: '15px'}} alt=""/>
            <div>Services</div>
            </div>
            {/* <div>Services</div> */}
            <div className="section-tag-line"></div>
          </div>
          <div className="row">
            <div className="services-list">
              <div className="services-card">
                <Link>
                  <FaCode size={40} className="serv-icons" />
                </Link>
                <h2>UI/UX Design</h2>
                <p>
                  UI/UX design is the art of visually communicating ideas and
                  messages through a combination of typography, imagery, color,
                  and layout.
                </p>
                <Link
                  href="#"
                  className="customButton customButton-transparent"
                >
                  Learn More <GoArrowUpRight className="arrow" />
                </Link>
              </div>
              <div className="services-card">
                <Link>
                  <FiCrop size={40} className="serv-icons" />
                </Link>
                <h2>Web Design</h2>
                <p>
                  A clean, responsive layout ensures accessibility across
                  devices, while strategic use of typography and color enhances
                  user engagement.
                </p>
                <Link
                  href="#"
                  className="customButton customButton-transparent"
                >
                  Learn More <GoArrowUpRight className="arrow" />
                </Link>
              </div>
              <div className="services-card">
                <Link>
                  <FaAppStore size={40} className="serv-icons" />
                </Link>
                <h2>App Design</h2>
                <p>
                  Responsive layouts and accessible features make the app usable
                  across various devices and demographics. Building Apps for All Devices and Users.
                </p>
                <Link
                  href="#"
                  className="customButton customButton-transparent"
                >
                  Learn More <GoArrowUpRight className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa6";
import { FaCropSimple } from "react-icons/fa6";
import { FaAppStore } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <section className="services" id="3">
      <div className="section-wrapper g-design">
        <div className="container">
          <div className="top-heading text-center">
            <span className="common-heading">Services</span>
            <h2>
              Our Services
            </h2>
            <p>At the core of our offerings lies a commitment to delivering smart, scalable, and future-ready solutions.</p>
          </div>
          <div className="row">
            <div className="services-list">
              <div className="services-card">
                <div class="gradient-line"></div>
                <Link className="icon_box">
                  <FaCode size={35} className="serv-icons" />
                </Link>
                <h2>UI/UX Design</h2>
                <p>
                  UI/UX design is the art of visually communicating ideas and
                  messages through a combination of typography, imagery, color,
                  and layout.
                </p>
                <Link
                  href="#"
                  className="customButton serv-btn"
                >
                  Learn More <GoArrowUpRight className="arrow" />
                </Link>
              </div>
              <div className="services-card">
                <div class="gradient-line"></div>
                <Link className="icon_box">
                  <FaCropSimple size={35} className="serv-icons" />
                </Link>
                <h2>Web Design</h2>
                <p>
                  A clean, responsive layout ensures accessibility across
                  devices, while strategic use of typography and color enhances
                  user engagement.
                </p>
                <Link
                  href="#"
                  className="customButton serv-btn"
                >
                  Learn More <GoArrowUpRight className="arrow" />
                </Link>
              </div>
              <div className="services-card">
                <div className="gradient-line"></div>
                <Link className="icon_box">
                  <FaAppStore size={35} className="serv-icons" />
                </Link>
                <h2>App Design</h2>
                <p>
                  Responsive layouts and accessible features make the app usable
                  across various devices and demographics. Building Apps for All Devices and Users.
                </p>
                <Link
                  href="#"
                  className="customButton serv-btn"
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

import "./ContactContentStyles.css";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import star_icon from "../assets/star.svg";

const ContactContent = () => {
  return (
    <section className="contact-section" id="6">
      <div className="section-wrapper g-design">
        <div className="container">
          <div className="section-tag">
            {/* <div>Contact Us</div> */}
            <div class="hero-badge"><img src={star_icon} loading="lazy" style={{width: '15px'}} alt=""/>
            <div>Contact Us</div>
            </div>
            <div className="section-tag-line"></div>
          </div>
          <div class="row">
            <div className="col-lg-6">
              <h2 className="cont-title">
                Let us know if you want to talk about your next project!
              </h2>
              <div className="para-title">
                Fill the form and start a project or, if you prefer to email us
                instead... <a href="#">pandeysarvesh102@gmail.com</a>
              </div>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-6">
              <form>
                <div className="field-section">
                  <label className="field-label">What's your name?</label>
                  <input
                    type="text"
                    className="text-field"
                    name="name"
                    required
                  ></input>
                </div>
                <div className="field-section">
                  <label className="field-label">What's your email?</label>
                  <input
                    type="email"
                    className="text-field"
                    name="email"
                    required
                  ></input>
                </div>
                <div className="field-section">
                  <label class="field-label">
                    What's your budget? (Ex. $3K - $5K)
                  </label>
                  <input
                    type="number"
                    className="text-field"
                    name="number"
                    required
                  ></input>
                </div>
                <div className="field-section">
                  <label className="field-label">Your Comment</label>
                  <textarea
                    className="text-field"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <Link to="/" className="customButton">
                  <span>
                    Send Message
                    <GoArrowUpRight className="arrow" />
                  </span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;

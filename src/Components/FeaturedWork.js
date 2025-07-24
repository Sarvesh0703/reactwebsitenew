import React from "react";
import "./FeaturedWorkStyle.css";

const FeaturedWork = () => {
  return (
    <section className="featured" id="3">
      <div className="section-wrapper g-design">
        <div className="container">
          <div class="top-heading text-center">
            <h2>Featured Work</h2>
            <p>
              Our featured work showcases how we harness cutting-edge technology
              to solve real-world challenges with precision and efficiency.
            </p>
          </div>
          <div className="section-1">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <div className="page-wrapper">
                    <div className="number-center">50+</div>
                    <div className="page-title">Projects Completed</div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="page-wrapper">
                    <div className="number-center">40+</div>
                    <div className="page-title">Happy Clients</div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="page-wrapper">
                    <div className="number-center">2+</div>
                    <div className="page-title">Years Experience</div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="page-wrapper">
                    <div className="number-center">98%</div>
                    <div className="page-title">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

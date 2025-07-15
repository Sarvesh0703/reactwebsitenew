import React, { useEffect } from "react";
import project_img_1 from "../assets/port-1.jpg";
import project_img_2 from "../assets/port-2.jpg";
import project_img_3 from "../assets/port-3.jpg";
import project_img_4 from "../assets/port-4.jpg";
import project_img_5 from "../assets/port-5.jpg";
import "./ProjectSlideStyle.css";

const ProjectSlide = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.$ && window.$("#gallery").slick) {
        window.$("#gallery").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 6000,
          cssEase: "linear",
          infinite: true,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024, // tablets and below
              settings: {
                slidesToShow: 2,
                speed: 6000,
              },
            },
            {
              breakpoint: 600, // phones
              settings: {
                slidesToShow: 1,
                speed: 6000,
              },
            },
          ],
        });
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="project-section">
  <div className="section-wrapper">
    <div id="gallery">
      <div className="gradient-border"><img src={project_img_1} alt="slide image" /></div>
      <div className="gradient-border"><img src={project_img_2} alt="slide image" /></div>
      <div className="gradient-border"><img src={project_img_3} alt="slide image" /></div>
      <div className="gradient-border"><img src={project_img_4} alt="slide image" /></div>
      <div className="gradient-border"><img src={project_img_5} alt="slide image" /></div>
    </div>
  </div>
</section>
  );
};

export default ProjectSlide;

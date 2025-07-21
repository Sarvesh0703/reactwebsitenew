import React, { useState, useEffect } from "react";
import "./ProjectsStyle.css";
import project_img_1 from "../assets/port-1.jpg";
import project_img_2 from "../assets/port-2.jpg";
import project_img_3 from "../assets/port-3.jpg";
import project_img_4 from "../assets/port-4.jpg";
import project_img_5 from "../assets/port-5.jpg";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import star_icon from "../assets/star.svg";

const slideData = [
  {
    title: "Write a fancy title about your project here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: project_img_1,
    link: "#",
  },
  {
    title: "Write a fancy title about your project here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: project_img_2,
    link: "#",
  },
  {
    title: "Write a fancy title about your project here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: project_img_3,
    link: "#",
  },
  {
    title: "Write a fancy title about your project here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: project_img_4,
    link: "#",
  },
  {
    title: "Write a fancy title about your project here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: project_img_5,
    link: "#",
  },
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="projects" id="5">
      <div className="section-wrapper g-design">
        <div className="container">
          <div className="top-heading text-center">
            <span class="common-heading">Featured Projects</span>
            <h2 class="">Interactive Portfolio</h2>
            <p>
              <strong class="text-white">Explore real results</strong> from our
              recent projects. Each solution delivered{" "}
              <strong class="text-white">measurable business impact</strong> for
              our clients.
            </p>
          </div>
          <div className="slide-wrapper">
            {slideData.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <div className="slide-content">
                  <div className="slide-text">
                    <h2>{slide.title}</h2>
                    <div className="projects-tag-container">
                      <div className="project-tag">Brand identity</div>
                      <div className="project-tag">UI&amp;UX</div>
                      <div className="project-tag">Graphic design</div>
                      <div className="project-tag">Web development</div>
                    </div>
                    <p>{slide.description}</p>
                    <Link to={slide.link} className="customButton view-btn">
                      <span>View Project</span>{" "}
                      <GoArrowUpRight className="arrow" />
                    </Link>
                  </div>
                  <div className="slide-image">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slide-controls">
            <button type="button" onClick={prevSlide}>
              &larr;&nbsp; Prev
            </button>
            <button type="button" onClick={nextSlide}>
              Next &nbsp;&rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

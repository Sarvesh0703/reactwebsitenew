import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "./NavbarStyle.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const sectionIds = ["1", "2", "3", "4", "5", "6"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          // Set active nav link
          if (
            scrollY >= offsetTop - 120 &&
            scrollY < offsetTop + offsetHeight - 120
          ) {
            setActiveSection(id);
          }

          // Animate section on scroll
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < window.innerHeight - 100) {
            section.classList.add("animate");
          }
        }
      });

      setColor(scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-3 col-lg-3">
            <a href="" className="logo">
              <h1>Portfolio</h1>
            </a>
          </div>
          <div className="col-sm-9 col-lg-9">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <a href="#1" className={activeSection === "1" ? "active" : ""} onClick={() => setClick(false)}>Home</a>
              </li>
              <li>
                <a href="#3" className={activeSection === "3" ? "active" : ""} onClick={() => setClick(false)}>Services</a>
              </li>
              <li>
                <a href="#2" className={activeSection === "2" ? "active" : ""} onClick={() => setClick(false)}>About Me</a>
              </li>
              <li>
                <a href="#4" className={activeSection === "4" ? "active" : ""} onClick={() => setClick(false)}>How we work</a>
              </li>
              <li>
                <a href="#5" className={activeSection === "5" ? "active" : ""} onClick={() => setClick(false)}>Projects</a>
              </li>
              <li>
                <a href="#6" className={activeSection === "6" ? "active" : ""} onClick={() => setClick(false)}>Contact Us</a>
              </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <IoCloseSharp size={25} style={{ color: "#000" }} />
              ) : (
                <RiMenu3Line size={25} style={{ color: "#fff" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

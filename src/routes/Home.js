import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
// import ContactContent from "../Components/ContactContent";
// import Experience from "../Components/Experience";
// import Education from "../Components/Education";
import Services from "../Components/Services";
// import Portfolio from "../Components/Portfolio";
// import ProjectSlide from "../Components/ProjectSlide";
import Projects from "../Components/Projects";
import ContactContent from "../Components/ContactContent";
import Technology from "../Components/Technology";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Technology />
      {/* <ProjectSlide /> */}
      <Services />
      <Projects />
      {/* <Education />
      <Portfolio />
      <Experience />
      <ContactContent /> */}
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Home;

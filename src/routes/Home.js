import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
// import Experience from "../Components/Experience";
// import Education from "../Components/Education";
import Services from "../Components/Services";
// import Portfolio from "../Components/Portfolio";
import Projects from "../Components/Projects";
import ContactContent from "../Components/ContactContent";
import Technology from "../Components/Technology";
import FeaturedWork from "../Components/FeaturedWork";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      {/* <ProjectSlide /> */}
      <Services />
      <Projects />
      {/* <Education />
      <Portfolio />
      <Experience /> */}
      <Technology />
      <FeaturedWork />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Home;

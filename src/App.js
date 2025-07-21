import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import ScrollProgress from './Components/ScrollProgress';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
     <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;

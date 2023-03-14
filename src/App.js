import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Glims from "./components/Glims";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const glimpsRef = useRef(null);
  const contactRef = useRef(null);
  const [change, setChange] = useState(false);

  const checkScroll = (event) => {
    // console.log(event.target.documentElement.scrollTop);
    if (event.target.documentElement.scrollTop > 100) {
      return setChange(true);
    }
    return setChange(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const clickHome = () =>
    window.scrollTo({
      top: homeRef.current.offsetTop - 120,
      behavior: "smooth",
    });
  const clickSkill = () =>
    window.scrollTo({
      top: skillRef.current.offsetTop,
      behavior: "smooth",
    });
  const clickGlipm = () => {
    console.log(glimpsRef.current.offsetTop)
    window.scrollTo({
      top: glimpsRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const clickContact = () =>
    window.scrollTo({
      top: contactRef.current.offsetTop - 220,
      behavior: "smooth",
    });

  return (
    <>
      <Navbar
        home={clickHome}
        skills={clickSkill}
        glimps={clickGlipm}
        contact={clickContact}
        change={change}
      />
      <Home homeRef={homeRef} clickContact={clickContact} />
      <Skills skillRef={skillRef} />
      <Glims glimpsRef={glimpsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;

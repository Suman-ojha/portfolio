import React, { useRef, useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Glims from './components/Glims';
// import { Routes, Route } from "react-router-dom";
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const glimpsRef = useRef(null);
  const contactRef = useRef(null);

  const clickHome = () => window.scrollTo({
    top: homeRef.current.offsetTop - 120,
    behavior: "smooth"
  });
  const clickSkill = () => window.scrollTo({
    top: skillRef.current.offsetTop - 70,
    behavior: "smooth"
  });
  const clickGlipm = () => window.scrollTo({
    top: glimpsRef.current.offsetTop,
    behavior: "smooth"
  });

  return (
    <>
      <Navbar home={clickHome} skills={clickSkill} glimps={clickGlipm} />
      <Home homeRef={homeRef} />
      <Skills skillRef={skillRef} />
      <Glims glimpsRef={glimpsRef} />
    </>
  )
}

export default App
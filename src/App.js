import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Glims from './components/Glims';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Glims/>
    </>
  )
}

export default App
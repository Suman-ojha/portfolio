import React, { useState, useEffect } from "react";
// Import Swiper React components
import Carousel from "react-elastic-carousel";

import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Col, Container, Row } from "react-bootstrap";

const skill = [
  { name: "c++", percentage: 90 },
  { name: "python", percentage: 70 },
  { name: "java", percentage: 75 },
  { name: "javascript", percentage: 85 },
  { name: "DS", percentage: 90 },
  { name: "Html", percentage: 85 },
  { name: "Css", percentage: 70 },
  { name: "React", percentage: 60 },
  { name: "MongoDB", percentage: 75 },
  { name: "Node.Js", percentage: 80 },
  { name: "ExpressJs", percentage: 80 },
  
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Skills = ({ skillRef }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <Container className="mt-5 pt-5" ref={skillRef}>
      <Row className="justify-content-center align-items-center mt-1 pt-5">
        <Col>
          <h4 className="text-center"> Skills</h4>
          <p className="text-center descPara">
            Programming Languages: C, Java Script, C++, Java, Python
            <br />
            Freamworks: Bootstrap, React.js, Socket.io, Node.js, Express.js
            <br />
            Development & Operations: Vercel, Netlify
            <br />
            Data Base Managemet System: SQL, MongoDB
            <br />
            Role : Backend Development
            <br />
            Coding Platform :- LeetCode, GeekforGeeks,HackerRank
            <br />
            Solved 350+ Coding Problems , DSA
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel breakPoints={breakPoints} className="skill_bar">
            {skill.map((param, index) => {
              const { name, percentage } = param;
              return (
                <div key={index} className="skill_round">
                  <CircularProgressbar 
                  styles={buildStyles({
                    textSize: '16px',
                    pathTransitionDuration: 1.5,
                    circleRatio:2 
                  })}
                    value={percentage}
                    text={`${percentage}%`}
                  />
                  <p>{name}</p>
                </div>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

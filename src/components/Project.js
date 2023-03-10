import React from "react";
import { Col, Row } from "react-bootstrap";

const project = [
  {
    name1: "ChatApp",
    details: "Node.JS, Socket.io , Html, Css",
    url: "https://github-readme-streak-stats.herokuapp.com/?user=suman-ojha&",
    desUrl:"https://github.com/Suman-ojha/ChatApp"
  },
  {
    name1: "Auto Quote Generator",
    details: "Html, Css , Java Script",
    url:
      "https://leetcard.jacoblin.cool/suman099?theme=light&font=Abel&ext=heatmap",
      desUrl:"https://github.com/Suman-ojha/Dynamic-Quoate-Generator"
  },
  {
    name1: "Algo Visualizer",
    details: "Html, Css , Java Script",
    url: "https://www.arghadeep.in/assets/project-img2.png",
    desUrl:"https://github.com/Suman-ojha/Sorting-Visualiser"
  },
];
const Project = () => {
  return (
    <Row className="g-3 justify-content-center align-items-center">
      {project.map((param, idx) => {
        const { name1, details, url ,desUrl} = param;
        return (
          <Col xs={12} md={4} key={idx}>
            <a href={desUrl} target="_">
              <div className="imageFit">
                <img
                  src={url}
                  alt={name1}
                  loading="lazy"
                  draggable="false"
                  className="image"
                />
                <div className="overlay">
                  <div className="text">
                    <h6>{name1}</h6>
                    <p className="m-0">{details}</p>
                  </div>
                </div>
              </div>
            </a>
          </Col>
        );
      })}
    </Row>
  );
};

export default Project;

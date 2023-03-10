import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import three from "../img/three.svg";

function Home({ homeRef, clickContact }) {
  return (
    <Container fluid id="home" className="mt-3 pt-2" ref={homeRef}>
      <Row className="justify-content-center align-items-center mt-4 pt-4">
        <Col xs={12} md={6}>
          <h4 className="mb-4">
            Hi ! I'm Suman
          </h4>
          <p className="descPara">
            I am pursuing a B.Tech degree in Computer Science and Engineering at
            MAKAUT, W.B. I'm a web and software developer and computer
            programmer with an avid interest in Data Structures, Algorithms, and
            Optimization. As a core programmer, I love taking on challenges and
            love being part of the solution.
          </p>
          <button className="cta" onClick={clickContact}>
            Let's Connect
          </button>
        </Col>
        <Col xs={12} md={6}>
          <img
            src={three}
            alt="one"
            className="w-100"
            loading="lazy"
            draggable="false"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

import React from "react";
import resume from "../img/Suman Ojha_1 .pdf";

const Resume = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9 Resume">
      <iframe
        title="resume"
        width="400px"
        height="450px"
        className="embed-responsive-item"
        src={resume}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
       
      ></iframe>
    </div>
  );
};

export default Resume;

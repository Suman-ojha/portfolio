import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const year = new Date();
  
  return (
    <>
      <footer className="footer text-light foot mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h6 className="m-0 p-0 text-center FontStyle">Suman Ojha</h6>
            </div>

            <div className="col-md-6">
              <p className="m-0 p-0 text-center">Follow Me</p>
              <ul className="list-inline d-flex  gap-2 justify-content-center">
                <li>
                  <a href="https://www.facebook.com/suman.ojha.9028" target="_">
                    <BsFacebook className="Fab-icon"/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Suman-ojha" target="_">
                    <BsGithub className="Fab-icon"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/suman-ojha-533a171a2/" target="_">
                    <BsLinkedin className="Fab-icon"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="m-0 p-0 text-center textFont">
                &copy;Copyrights by Suman Ojha || All Rights Reserved @{year.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

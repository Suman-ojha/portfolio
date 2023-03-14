import React, { memo } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const navBtn = [
  {
    name: "home",
    // link: "#home",
  },
  {
    name: "skill",
    // link: "#skill",
  },
  {
    name: "glimps",
    // link: "#glimps",
  },
  {
    name: "contact",
    // link: "#contact",
  },
];

function Navigation({ home, skills, glimps, contact, change }) {
  return (
    <Navbar
      collapseOnSelect
      // bg="light"
      expand="lg"
      variant="dark"
      className={`m-0 p-0 ${change ? "navContainerScroll" : "navContainer"}`}
    >
      <Container fluid className="bg-transparent">
        <Navbar.Brand className="bg-transparent fontStyle p-0 " onClick={home}>
          Suman Ojha
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav bg-transparent" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end bg-transparent"
        >
          <Nav className="text-capitalize bg-transparent text-center">
            {navBtn.map((params, index) => {
              const { name} = params;
              return (
                <Nav.Link
                  key={index}
                  onClick={
                    name === "home"
                      ? home
                      : name === "skill"
                      ? skills
                      : name === "glimps"
                      ? glimps
                      : name === "contact" && contact
                  }
                  className="text-light
                  } me-3 bg-transparent"
                >
                  {name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default memo(Navigation);

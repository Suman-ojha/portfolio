import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const navBtn = [
    {
        name: "home",
        link: "#home",
    },
    {
        name: "skill",
        link: "#skill",
    },
    {
        name: "glimps",
        link: "#glimps",
    },
    {
        name: "contact",
        link: "#contact",
    },
]

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='m-0 p-0 navContainer'>
            <Container fluid >
                <Navbar.Brand href="#home" className='fontStyle p-0'>Suman Ojha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='text-capitalize'>
                        {navBtn.map((params,index) => {
                            const { name, link } = params;
                            return <Nav.Link key={index} href={link} className="text-light me-3">{name}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
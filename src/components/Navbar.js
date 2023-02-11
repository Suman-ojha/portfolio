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
        <Navbar collapseOnSelect expand="lg" className='m-0 p-0'>
            <Container fluid>
                <Navbar.Brand href="#home" className='fontStyle p-0'>Suman Ojha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='text-capitalize'>
                        {navBtn.map((params) => {
                            const { name, link } = params;
                            return <Nav.Link href={link}>{name}</Nav.Link>
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
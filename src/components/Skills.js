import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const skill = [
    { name: "C++" },
    { name: "Python" },
    { name: "Java Script" },
    { name: "SQL" },
    { name: "Data Structure" },
    { name: "Problem Solving" }

]
const Skills = () => {
    return (
        <Container fluid id="skill" className='mt-5 pt-5'>
            <Row className='justify-content-center align-items-center mt-5 pt-5'>
                <Col>
                    <h4 className='text-center'> Skills</h4>
                    <p className='text-center descPara'>
                        Programming Languages:   C, Java Script, C++, Java, Python<br />
                        Freamworks:   Bootstrap, React.js, Socket.io, Node.js, Express.js<br />
                        Development & Operations:    Vercel, Netlify<br />
                        Data Base Managemet System:   SQL, MongoDB<br />

                        Role : Backend Development<br />
                        Coding Platform :- LeetCode, GeekforGeeks,HackerRank<br />
                        Solved 350+ Coding Problems , DSA

                    </p>

                </Col>
            </Row>
            <Row className='my-5' >
                {skill.map((param, index) => {
                    const { name } = param;
                    return (
                        <Col key={index} xs={2} className="d-flex justify-content-center align-items-center">
                            <div className='skill_round'>
                                <h6>{name}</h6>
                            </div>
                        </Col>
                    )

                })}


            </Row>
        </Container>
    )
}

export default Skills
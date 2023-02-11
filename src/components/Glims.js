import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Project from './Project'
import Resume from './Resume'

const Glims = () => {
    return (
        <>
            <Container id="glimps" className='pt-5 mt-5'>
                <Row className='pt-5 mt-5'>
                    <Col>
                        <h4 className='text-center'> Glimses</h4>
                        <p className='text-center descPara'>
                            Hands-on experience in Analysis, Development, and Implementation. Solid Programming expertise in JavaScript, C++, Enthusiastic team player, a fast learner with creative problem-solving skills, good coding, and communication skills.<br />
                            Would be interested in getting exposure to domains providing intellectually challenging work in the field of computers for proving and enriching my knowledge and skills.
                        </p>

                    </Col>
                </Row>

                <Row className='mt-4 mb-5 pb-5'>
                    <Tabs
                        defaultActiveKey="project"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="project" title="Project">
                            <Project />
                        </Tab>
                        <Tab eventKey="resume" title="Resume">
                            <Resume />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
        </>
    )
}

export default Glims
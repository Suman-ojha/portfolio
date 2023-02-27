import React from 'react'
import { Col, Row } from 'react-bootstrap'


const project = [
    {
        name1: "ChatApp",
        details: "Group Chat , Node.JS, Socket.io , Html, Css",
        url: "https://github-readme-streak-stats.herokuapp.com/?user=suman-ojha&"
    },
    {
        name1: "Auto Quote Generator",
        details: "Fetch Api , Html, Css , Java Script",
        url: "https://leetcard.jacoblin.cool/suman099?theme=light&font=Abel&ext=heatmap"

    },
    {
        name1: "Algo Visualizer",
        details: "Sorting visualization , Html, Css , Java Script",
        url: "https://www.arghadeep.in/assets/project-img2.png"
    }
]
const Project = () => {
    return (
        <Row className="g-3 justify-content-center align-items-center">
            {project.map((param, idx) => {
                const { name1, details, url } = param;
                return <Col xs={12} md={4} key={idx} className="imageFit">
                    <img src={url} alt={name1} loading='lazy' draggable="false" />
                    <p className='m-0 text-center'>{details}</p>
                </Col>
            })}
        </Row>
    )
}

export default Project
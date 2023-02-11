import React from 'react'
import { Col, Row } from 'react-bootstrap'


const project = [
    {
        name1: "ChatApp",
        details: "Group Chat , Node.JS, Socket.io , Html, Css",
        url: "https://img.freepik.com/free-vector/hand-holding-phone-with-conversation-girl-chat-bot-mobile-app-talking-robot-online-flat-vector-illustration-technology-assistance-concept-banner-website-design-landing-page_74855-24649.jpg"
    },
    {
        name1: "Auto Quote Generator",
        details: "Fetch Api , Html, Css , Java Script",
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20210220191848/RandomQuoteGenerator.jpg"

    },
    {
        name1: "Algo Visualizer",
        details: "Sorting visualization , Html, Css , Java Script",
        url: "https://www.arghadeep.in/assets/project-img2.png"
    }
]
const Project = () => {
    return (
        <Row xs={1} md={2} className="g-3 justify-content-center align-items-center">
            {project.map((param, idx) => {
                const { name1, details, url } = param;
                return <Col xs={4} key={idx}>
                    <img src={url} alt={name1} className="imageFit" />
                </Col>
            })}
        </Row>
    )
}

export default Project
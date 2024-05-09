import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container id="projects" className="my-5">
            <h1 className="text-center">Projects</h1>
            <Row className="mt-5">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Project 1</Card.Title>
                            <Card.Text>
                                This is a description of Project 1.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Project 2</Card.Title>
                            <Card.Text>
                                This is a description of Project 2.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Add more Col components for each project */}
            </Row>
        </Container>
    );
};

export default Projects;
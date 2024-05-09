import React from 'react';
import { Container, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" className="my-5">
            <Card>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        Welcome to my portfolio! I'm a software engineer with experience in full-stack development. I specialize in building high-quality web applications and have a passion for clean, efficient code.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default About;
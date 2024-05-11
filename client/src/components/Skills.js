import React from "react";
import { Container, Card } from "react-bootstrap";

const Skills = () => {
  const skills = [
    // Languages
    {
      name: "JavaScript",
      logo: "https://simpleicons.org/icons/javascript.svg",
    },
    { name: "Python", logo: "https://simpleicons.org/icons/python.svg" },
    { name: "HTML", logo: "https://simpleicons.org/icons/html5.svg" },
    // Frontend Frameworks
    { name: "Vue.js", logo: "https://simpleicons.org/icons/vuedotjs.svg" },
    { name: "React", logo: "https://simpleicons.org/icons/react.svg" },
    { name: "Bootstrap", logo: "https://simpleicons.org/icons/bootstrap.svg" },
    { name: "CSS", logo: "https://simpleicons.org/icons/css3.svg" },
    // Backend Frameworks
    { name: "Node.js", logo: "https://simpleicons.org/icons/nodedotjs.svg" },
    { name: "Express", logo: "https://simpleicons.org/icons/express.svg" },
    { name: "Flask", logo: "https://simpleicons.org/icons/flask.svg" },
    // Databases
    { name: "MongoDB", logo: "https://simpleicons.org/icons/mongodb.svg" },
    { name: "SQLite", logo: "https://simpleicons.org/icons/sqlite.svg" },
    // Cloud Services
    {
      name: "AWS DynamoDB",
      logo: "https://simpleicons.org/icons/amazondynamodb.svg",
    },
    { name: "AWS Lambda", logo: "https://simpleicons.org/icons/awslambda.svg" },
    // Version Control
    { name: "Git", logo: "https://simpleicons.org/icons/git.svg" },
    { name: "GitHub", logo: "https://simpleicons.org/icons/github.svg" },
    // API Testing & Development
    { name: "Postman", logo: "https://simpleicons.org/icons/postman.svg" },
    // Group Organization
    { name: "Jira", logo: "https://simpleicons.org/icons/jira.svg" },
  ];

  return (
    <Container>
      <h2>Skills</h2>
      <div>
        Left
        <Card
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            maxWidth: "50px",
          }}
        >
          {skills.map((skill) => (
            <Card.Body style={{ flex: "0 0 auto" }}>
              <Card.Img
                src={skill.logo}
                style={{ width: "50px", height: "50px" }}
              />
              <Card.Title>{skill.name}</Card.Title>
            </Card.Body>
          ))}
        </Card>
        Right
      </div>
    </Container>
  );
};

export default Skills;

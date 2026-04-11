import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={12} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                {/* Hello, I’m Pratik Prajapati, an aspiring DevOps Engineer passionate about automation, cloud computing, and designing scalable infrastructure. */}
                Hello, I’m Pratik Prajapati — an aspiring DevOps Engineer with a strong passion for automation, cloud computing, and building scalable, reliable infrastructure.
              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
                I am actively developing my DevOps expertise through hands-on projects and structured learning. As part of the #90DaysOfDevOps challenge with TrainWithShubham, I am gaining practical experience with industry-standard tools and real-world workflows.

                My focus is on designing and implementing CI/CD pipelines, automating infrastructure using Infrastructure as Code (IaC), and working with cloud platforms to streamline development and operations.
              </p>
              <p>
                My focus is on designing efficient CI/CD pipelines, automating infrastructure, and utilizing cloud platforms to seamlessly integrate development and operations, while also implementing robust monitoring and alerting systems for application performance.
              </p>

              <h4 className='mt-4'>What I’m Building</h4>
              <p>
                - End-to-end CI/CD pipelines for automated build and deployment<br></br>
                - Containerized applications using Docker and Kubernetes<br></br>
                - Cloud-based infrastructure solutions using AWS<br></br>
                - Monitoring and alerting systems to ensure performance and reliability
                and more...
              </p>

              <h4 className="mt-4">DevOps Mindset</h4>
              <p>
                I believe DevOps is not just about tools, but about a culture of continuous improvement, collaboration, and automation. I enjoy solving complex problems, optimizing workflows, and continuously learning new technologies to build efficient and scalable systems.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I document my learning journey and insights on <a href="https://pratikprajapati.hashnode.dev/" target="_blank" rel="noopener noreferrer"><u>Hashnode</u></a>, sharing practical solutions and challenges encountered in the DevOps space.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>

              <p>I’m open to collaboration, mentorship, and opportunities in DevOps and Cloud Engineering.</p>
              <p>
                📧 Email: prajapatipratik20@gmail.com<br></br>
                🔗 LinkedIn: https://www.linkedin.com/in/pratik2009/<br></br>
                💻 GitHub: https://github.com/Pratikprajapati20<br></br>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default About;
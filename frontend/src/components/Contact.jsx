import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "41e1aeac-486d-4ad3-92fe-3edb0a06e9aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setAlertVariant('success');
    setAlertMessage('Message Sent!');
    setFormData(data.success ? "Success!" : "Error");

    setIsSubmitting(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

  };

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="lead mb-5">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Col>
      </Row>

      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4">
              <h3 className="mb-4">Contact Information</h3>

              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">
                    <a href="mailto:prajapatipratik20@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      prajapatipratik20@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaLinkedin className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">LinkedIn</h5>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/in/pratik2009/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/pratik2009/
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaGithub className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">GitHub</h5>
                  <p className="mb-0">
                    <a href="https://github.com/Pratikprajapati20" target="_blank" rel="noopener noreferrer">
                      github.com/Pratikprajapati20
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-4 d-flex align-items-center">
                <SiHashnode className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">Hashnode</h5>
                  <p className="mb-0">
                    <a href="https://pratikprajapati.hashnode.dev/" target="_blank" rel="noopener noreferrer">
                      pratikprajapati.hashnode.dev/
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>



          </Card>
        </Col>

        <Col lg={7}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h3 className="mb-4">Send a Message</h3>

              {showAlert && (
                <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
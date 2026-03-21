import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaJenkins, FaDocker, FaAws, FaChartLine, FaPhp, FaPython } from 'react-icons/fa';
import { SiTerraform } from 'react-icons/si';
import profilePhoto from '../assets/profile-photo.jpg'; // Add your photo to assets folder
import Type from './Type';

const PurpleSpan = styled.span`
  color: #ac81c0;
`;
const HeroSection = styled.div`
  padding: 120px 0;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 575px) {
    padding: 80px 0;
  }
`;

// const ProfileImage = styled(Image)`
//   width: 300px;
//   height: 300px;
//   object-fit: cover;
//   border-radius: 20%;
//   border: 4px solid var(--accent-color);
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
//   transition: transform 0.5s ease, box-shadow 0.5s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 0 30px var(--accent-color);
//   }

//   @media (max-width: 575px) {
//     width: 150px;
//     height: 150px;
//   }
// `;

const PolaroidFrame = styled.div`
  position: relative;
  width: 260px;
  height: 320px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 20px 60px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: rotate(-3deg);
  transition: all 0.3s ease;
  
  &::after {
    content: 'A Developer';
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: var(--text-color);
    text-align: center;
  }
  
  &:hover {
    transform: rotate(0deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 575px) {
    width: 200px;
    height: 280px;
    padding: 15px 15px 55px 15px;
    
    &::after {
      bottom: 18px;
      font-size: 12px;
    }
  }
`;

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const SkillIconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;



const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Reveal animation on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <HeroSection className="hero-section">
        <Container>
          <Row className="align-items-center">
            {/* <Col lg={4} className="text-center mb-4 mb-lg-0">
              <ProfileImage src={profilePhoto} alt="Profile" fluid loading="lazy" />
            </Col> */}
            <PolaroidFrame>
              <ProfileImage src={profilePhoto} alt="Profile" fluid loading="lazy" />
            </PolaroidFrame>
            <Col lg={8} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4 gradient-text">
                <span className="hero-header">
                  <Type />
                </span><br />

                <PurpleSpan className="hero-name">Pratik 👋</PurpleSpan>

              </h1>
              <div className="lead mb-5 typing-animation">
                <p>
                  A Software Engineer with 7+ years of experience, now transitioning into DevOps and Cloud Engineering with practical, hands-on experience in modern tools and technologies such as Docker, Jenkins, Terraform, Kubernetes, and AWS—focused on automating infrastructure, enhancing CI/CD pipelines, and delivering scalable cloud solutions
                </p>
                <p>Let's build something awesome together! 🚀</p>
              </div>
              <div>
                <Button href="#contact" variant="primary" size="lg" className="cta-button glow-button me-3">
                  Contact Me
                </Button>
                <Button href="#resume" variant={isDarkMode ? "outline-light" : "outline-dark"} size="lg" className="cta-button">
                  View Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container className="section">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title reveal">What I Do</h2>
            <p className="lead mb-5 reveal">
              I'm learning to design and implement DevOps solutions that help bridge development and operations, aiming to make software delivery faster and more reliable.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaJenkins />
              </SkillIconContainer>
              <h3>CI/CD Pipelines</h3>
              <p>Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and more.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <SiTerraform />
              </SkillIconContainer>
              <h3>Infrastructure as Code</h3>
              <p>Terraform and CloudFormation for provisioning and managing cloud resources.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaDocker />
              </SkillIconContainer>
              <h3>Containerization</h3>
              <p>Docker and Kubernetes for container orchestration and microservices architecture.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaAws />
              </SkillIconContainer>
              <h3>Cloud & AWS</h3>
              <p>Hands-on experience with AWS services like EC2, S3, IAM, RDS, and ECS for cloud-based deployments.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaChartLine />
              </SkillIconContainer>
              <h3>Monitoring & Logging</h3>
              <p>Using tools like Prometheus, Grafana, and AWS CloudWatch to monitor system performance and troubleshoot issues effectively.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer>
                <FaPhp /> / <FaPython />
              </SkillIconContainer>
              <h3>Scripting</h3>
              <p>Used for building dynamic web applications, automating tasks, and developing backend services..</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
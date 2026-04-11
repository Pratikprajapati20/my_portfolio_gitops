import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    FaJenkins, FaGithub, FaDocker, FaAws,
    FaTerminal,
    // FaTerminal, FaCode, FaLock,
    FaPhp,
    FaPython
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiArgo } from 'react-icons/si';

import Marquee from 'react-fast-marquee';
// import styled from 'styled-components';
const Skills = () => {
    React.useEffect(() => {
        const cards = document.querySelectorAll('.spotlight-card');

        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                card.style.setProperty('--x', `${x}%`);
                card.style.setProperty('--y', `${y}%`);
            });
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', () => { });
            });
        };
    }, []);

    const skillCategories = [
        { name: "Jenkins", icon: <FaJenkins className="skill-icon text-primary" /> },
        { name: "GitHub Actions", icon: <FaGithub className="skill-icon text-dark" /> },
        { name: "ArgoCD", icon: <SiArgo className="skill-icon text-warning" /> },
        { name: "Ansible", icon: <SiAnsible className="skill-icon text-danger" /> },
        { name: "Docker", icon: <FaDocker className="skill-icon text-info" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="skill-icon text-secondary" /> },
        // { name: "Helm", icon: <SiKubernetes className="skill-icon text-secondary" /> },
        { name: "Terraform", icon: <SiTerraform className="skill-icon text-primary" /> },
        { name: "CloudFormation", icon: <FaAws className="skill-icon text-warning" /> },
        { name: "Prometheus", icon: <SiPrometheus className="skill-icon text-danger" /> },
        { name: "Grafana", icon: <SiGrafana className="skill-icon text-warning" /> },
        { name: "AWS", icon: <FaAws className="skill-icon text-warning" /> },
        { name: "GitHub", icon: <FaGithub className="skill-icon text-dark" /> },
        { name: "PHP", icon: <FaPhp className="skill-icon text-danger" /> },
        { name: "Python", icon: <FaPython className="skill-icon text-info" /> },
        { name: "Bash/Shell", icon: <FaTerminal className="skill-icon text-secondary" /> },

    ]

    // const cardBorder = styled(Card)`
    // .my-custom-card {
    //   border: 1px solid transparent; /* Initial border, can be transparent or a subtle color */
    //   transition: border-color 0.3s ease-in-out; /* Smooth transition for the border color */
    // }

    // .my-custom-card:hover {
    //   border-color: #007bff; /* Desired border color on hover */
    // }
    //   `;

    return (
        <Container className="section">
            <Row>
                <Col lg={8} className="mx-auto text-center">
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="lead mb-5">
                        My technical expertise across the DevOps ecosystem
                    </p>
                </Col>
            </Row>

            <Marquee
                gradient={false}
                speed={60}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
            >
                {skillCategories.map((skill, index) => (
                    <Row className="me-1" xs={12}>
                        <Col xs={12} key={index} md={3} className="mb-4">

                            <Card style={{ width: '18rem' }} className="h-100 border-0 shadow-sm reveal my-custom-card" >
                                <Card.Body className="text-center p-2">
                                    {skill.icon}
                                    <h4 className="mt-2">{skill.name}</h4>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Row>
                ))}
            </Marquee>
        </Container >

    )
}

export default Skills
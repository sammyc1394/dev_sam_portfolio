import { Container, Row, Col, Nav, Tab, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    
    const projects = [
        {
            title: "",
            description: "",
            imgUrl: ""
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>{/* Description */}</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">First</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Second</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Third</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <TabPane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.title}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={colorSharp2}></img>
        </section>
    )
}
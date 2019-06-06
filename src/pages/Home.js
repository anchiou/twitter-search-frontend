import React from 'react';
import logo from '../images/sumikko_speech_bubble.png';
import QueryForm from '../components/QueryForm'
import './Home.css'
import {
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">
                                <img className="sumi"
                                    src={logo}
                                    alt={logo}
                                    height="128"
                                    width="128"
                                    style={{marginRight:20}} />
                                <b>SumiSearch</b>
                            </NavbarBrand>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="https://github.com/anchiou/twitter-search">
                                        GitHub
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                        </Navbar>
                    </Col>
                </Row>
                <Row className="QueryRow">
                        <QueryForm/>
                </Row>
            </Container>
        );
    }
}

export default Home ;

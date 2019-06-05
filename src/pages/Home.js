import React from 'react';
import logo from '../sumi.png';
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
import ResultEntry from '../components/ResultEntry';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         visible: false
    //     };
    // }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Navbar className="Navbar" color="light" light expand="md">
                            <NavbarBrand href="/">
                                <img className="sumi"
                                    src={logo}
                                    alt={logo}
                                    height="128"
                                    width="128"
                                    style={{marginRight:20}} />
                                SumiSearch
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
                <Row>
                    <QueryForm/>
                </Row>
            </Container>
        );
    }
}

export default Home ;

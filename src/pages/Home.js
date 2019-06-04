import React from 'react';
import logo from '../sumi.png';
import QueryForm from '../components/QueryForm'
import {
    Alert,
    Container,
    Row,
    Col,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse
} from 'reactstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        return (
            console.log("submit detected"),
            this.setState({visible: true})
        )
    }

    onDismiss = (e) => {
        e.preventDefault();
        return (
            this.setState({visible: false})
        );
    }

    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Navbar className="Navbar" color="light" light expand="md">
                            <NavbarBrand href="/">
                                <img className="yakitori"
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
                    <QueryForm onSubmit={this.onFormSubmit}/>
                </Row>
                <Row>
                    <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.state.query}
                        {this.state.filters}
                    </Alert>
                </Row>
            </Container>
        );
    }
}

export default HomePage;

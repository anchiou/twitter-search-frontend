import React from 'react';
import logo from './sumi.png';
import './App.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
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

function App() {
    return (
        <div>
            <QueryForm/>
        </div>
    );
}


class QueryForm extends React.Component {
    render() {
        return (
            <Container fluid='true'>
                <Row>
                    <Col>
                        <Navbar className="Navbar" color="light" light expand="md">
                            <NavbarBrand href="/">
                                <img className="yakitori" src={logo} alt={logo} height="128" width="128" style={{marginRight:20}} />
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
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="User Query">Query</Label>
                                <Input type="search" name="q" id="userQuery" placeholder="Search tweets"/>
                            </FormGroup>
                        </Col>
                        <Col xs="2">
                            <FormGroup>
                                <Label for="languageSelect">Language</Label>
                                <Input type="select" name="lang" id="language">
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Japanese</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Button>Search</Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}
export default App;

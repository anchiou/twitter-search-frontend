import React from 'react';
import logo from './sumi.png';
import './App.css';
import {
    Alert,
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
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            filters: "English",

            visible: false
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        return (
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
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="User Query">Query</Label>
                                <Input
                                    type="search"
                                    name="q"
                                    id="query"
                                    placeholder="Search tweets"
                                    onChange={e => this.setState(
                                        { query: e.target.value }
                                    )}/>
                            </FormGroup>
                        </Col>
                        <Col xs="2">
                            <FormGroup>
                                <Label for="languageSelect">Language</Label>
                                <Input
                                    type="select"
                                    name="lang"
                                    id="language"
                                    onChange={e => this.setState(
                                        { filters: e.target.value }
                                    )}>
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Japanese</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Button
                        onClick={this.onFormSubmit}
                        style={{marginLeft:15}}>
                        Search
                    </Button>
                    </Row>
                    <Row>
                        <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                            {this.state.query}
                            {this.state.filters}
                        </Alert>
                    </Row>
                </Form>
            </Container>
        );
    }
}


class TweetResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",       // display name
            screenName: "", // @username
            text: "",       // tweet content
            timestamp: "",  // UTC time of the tweet, convert
            favorites: 0,   // number of favorites
            retweets: 0,    // number of retweets
            location: [0,0] // coordinates
        }
    }

    render() {
        return(
            0
        );
    }
}
export default App;

import React from 'react';
import {
    Alert,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';

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
            console.log("submit detected"),
            this.setState({visible: true})
        )
    }

    onEnterKey = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            console.log("enter key detected")
            this.setState({visible: true});
        }
    }

    onDismiss = (e) => {
        e.preventDefault();
        return (
            this.setState({visible: false})
        );
    }

    render() {
        return(
            <Container fluid={true}>
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
                                    )}
                                    onKeyDown={this.onEnterKey}
                                />
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
                </Form>
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

export default QueryForm;

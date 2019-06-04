import React from 'react';
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
} from 'reactstrap';

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            filters: "English",
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <Container>
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
                </Form>
            </Container>
        );
    }
}

export default QueryForm;

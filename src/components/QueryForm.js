import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col,
} from 'reactstrap';
import TweetResult from '../components/TweetComponent.js'

class QueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            language: "English",
            sortBy: "Most Relevant",
            visible: false,
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        return (
            console.log("submit detected"),
            this.setState({
                visible: true
            })
        )
    }

    onEnterKey = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            console.log("enter key detected")
            this.setState({
                visible: true
            })
        }
    }

    render() {
        return(
            <React.Fragment>
            <Container fluid={true}>
                <Form onSubmit={this.onFormSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="User Query">Query</Label>
                                <Input
                                    type="search"
                                    name="q"
                                    id="query"
                                    placeholder="Search tweets"
                                    onChange={e =>
                                        this.setState({query: e.target.value})
                                    }
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
                                    onChange={e =>
                                        this.setState({language: e.target.value})
                                    }
                                >
                                    <option>Standard</option>
                                    <option>English</option>
                                    <option>Japanese</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="2">
                            <FormGroup>
                                <Label for="sortBy">Sort By</Label>
                                <Input
                                    type="select"
                                    name="sort"
                                    id="sortBy"
                                    onChange={e =>
                                        this.setState({sortBy: e.target.value})
                                    }
                                >
                                    <option>Most Relevant</option>
                                    <option>Most Liked</option>
                                    <option>Most Retweeted</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{marginBottom:15}}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <TweetResult query={this.state.query} lang={this.state.language} sortBy={this.state.sortBy}/>
            </React.Fragment>
        );
    }
}

export default QueryForm;

import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';

class ResultEntry extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "First Last",
            screenname: "screen_name",
            timestamp: "2h",
            tweet: "Hello World"
        }
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            <b>{this.state.name}</b> @{this.state.screenname}
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            {this.state.tweet}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
};

export default ResultEntry;
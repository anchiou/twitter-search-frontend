import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';
import check from '../Twitter_Verified_Badge.svg'
import heart from '../Twitter_Heart.svg'
import reply from '../Twitter_Reply.svg'
import rt from '../Twitter_Retweet.svg'

class ResultEntry extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "First Last",
            screenname: "screen_name",
            timestamp: "2h",
            tweet: "Hello World",
            likes: 0,
            retweets: 0,
            replies: 0,
            verified: true
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            screenname: this.props.screenname,
            timestamp: this.props.timestamp,
            tweet: this.props.tweet,
            likes: this.props.likes,
            retweets: this.props.retweets,
            replies: this.props.replies,
            verified: this.props.verified

        });
    }

    render() {
        return (
            <div style={{marginBottom:10}}>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            <b>{this.state.name}</b>
                            {this.state.verified ?
                                <img className="verifiedCheck"
                                    src={check}
                                    alt={check}
                                    height="20"
                                    width="20"
                                    style={{marginLeft: 4, marginRight: 4}}
                                /> : null
                            }
                            <small>
                                @{this.state.screenname}
                                <small>&bull;</small>
                                {this.state.timestamp}
                            </small>
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            {this.state.tweet}
                        </ListGroupItemText>
                        <ListGroupItemText>
                        <img className="replies"
                            src={reply}
                            alt={reply}
                            height="16"
                            width="16"
                            style={{marginRight:2}}
                        /> {this.state.replies}
                        <img className="heart"
                            src={heart}
                            alt={heart}
                            height="16"
                            width="16"
                            style={{marginLeft:16, marginRight: 2}}
                        /> {this.state.likes}
                        <img className="rt"
                            src={rt}
                            alt={rt}
                            height="16"
                            width="16"
                            style={{marginLeft:16, marginRight:6}}
                        />{this.state.retweets}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
};

export default ResultEntry;

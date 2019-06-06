import React from 'react';
import {
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap';
import check from '../images/Twitter_Verified_Badge.svg'
import heart from '../images/Twitter_Heart.svg'
import reply from '../images/Twitter_Reply.svg'
import rt from '../images/Twitter_Retweet.svg'

class ResultEntry extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            screenname: "",
            tweet: "",
            likes: 0,
            retweets: 0,
            replies: 0,
            verified: false,
            score: 0
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            screenname: this.props.screenname,
            tweet: this.props.tweet,
            likes: this.props.likes,
            retweets: this.props.retweets,
            replies: this.props.replies,
            verified: this.props.verified,
            score: this.props.score
        });
    }

    render() {
        return (
            <div style={{marginBottom:10}}>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            <b>{this.state.name}  </b>
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
                                <small>  &bull;  </small>
                                {this.state.score}
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
                            /> {this.state.replies}{  }
                            <img className="heart"
                                src={heart}
                                alt={heart}
                                height="16"
                                width="16"
                                style={{marginLeft:16, marginRight: 2}}
                            /> {this.state.likes}{  }
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

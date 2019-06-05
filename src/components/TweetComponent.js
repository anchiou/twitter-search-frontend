import React from 'react';
import axios from 'axios';
import ResultEntry from './ResultEntry.js'
import {Container, Row} from 'reactstrap';

class TweetResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        }
    }

    componentDidMount() {
        var lang = this.props.lang;
        if (lang == "Standard") {
            lang = "std";
        }
        else if (lang == "English") {
            lang = "en";
        }
        else {
            lang = "ja";
        }
        axios.post("localhost:8000/", {
            query: this.props.query,
            lang: lang
        })
        .then(res => {
            const tweets = res.map(obj => obj.data).sort((a, b) => b.likes - a.likes);
            this.setState({ tweets });
        })
    }

    componentDidUpdate(prevProps) {
        if ((this.props.sortBy !== prevProps.sortBy)
            && (this.props.lang === prevProps.lang)
            && (this.props.query === prevProps.query)) {
            if (this.props.sortBy === "Most Liked") {
                const tweets = this.state.tweets;
                tweets.sort((a, b) => b.likes - a.likes);
                this.setState({tweets})
            }
            else if (this.props.sortBy === "Most Retweeted") {
                const tweets = this.state.tweets;
                tweets.sort((a, b) => b.retweets - a.retweets);
                this.setState({tweets})
            }
            else {
                axios.post("localhost:8000/", {
                    'query': this.props.query,
                    'lang': this.props.lang
                })
                .then(res => {
                    const tweets = res.map(obj => obj.data);
                    this.setState({ tweets });
                })
            }
        }
        else if ((this.props.lang !== prevProps.lang)
            || (this.props.query !== prevProps.query)) {
            axios.post("localhost:8000/", {
                query: this.props.query,
                lang: this.props.lang
            })
            .then(res => {
                const tweets = res.map(obj => obj.data);
                if (this.props.sortBy === "Most Liked") {
                    tweets.sort((a, b) => b.likes - a.likes);
                }
                else if (this.props.sortBy === "Most Retweeted") {
                    tweets.sort((a, b) => b.retweets - a.retweets);
                }
                this.setState({ tweets });
            })
        }
    }

    render() {
        return (
            <Container>
                { this.state.tweets
                    .map(tweet =>
                        <div key={tweet.screenname}>
                        <ResultEntry
                            name={tweet.name}
                            screenname={tweet.screenname}
                            timestamp={tweet.timestamp}
                            tweet={tweet.tweet}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                            replies={tweet.replies}
                            verified={tweet.verified}
                        />
                        </div>

                )}
            </Container>
        );
    }
}

export default TweetResult;

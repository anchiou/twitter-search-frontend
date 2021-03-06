import React from 'react';
import axios from 'axios';
import ResultEntry from './ResultEntry.js'
import {Container} from 'reactstrap';

import loading from '../images/tonkatsu_cheer.gif';
import noResults from '../images/no_result_found.gif';
import './TweetComponent.css';

function TweetList(props) {
    const tweets = props.tweets;
    const listItems = tweets.map((tweet, i) =>
        <ResultEntry
            key = {i}
            name={tweet.username}
            screenname={tweet.screen_name}
            tweet={tweet.text}
            likes={tweet.favorite_count}
            retweets={tweet.retweet_count}
            replies={tweet.reply_count}
            verified={tweet.verified}
            score={tweet.score}
        />
    );
    return (
        listItems
    );
}

class TweetResult extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            noResults: false,
            tweets: []
        }
    }

    fetchData = () => {
        this.setState({ loading: true, noResults: false });
        var lang = this.props.lang;
        if (lang === "Standard") {
            lang = "std";
        }
        else if (lang === "English") {
            lang = "en";
        }
        else {
            lang = "ja";
        }
        axios.post("http://localhost:8080/search",
            {
            query: this.props.query,
            lang: lang
            },
            {headers: {"Access-Control-Allow-Origin": "*" }}
        )
        .then(res => {
            const data = res.data.data;
            if (data === undefined || data.length === 0) {
                this.setState({ noResults: true });
            }
            this.setState({ tweets: res.data.data, loading: false })
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.query !== prevProps.query) {
            this.fetchData();
        }
        else if ((this.props.sortBy !== prevProps.sortBy)
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
                axios.post("http://localhost:8080/search", {
                    'query': this.props.query,
                    'lang': this.props.lang
                },
                {headers: {"Access-Control-Allow-Origin": "*" }})
                .then(res => {
                    console.log(res.data);
                    this.setState({ tweets: res.data.data })
                })
            }
        }
        else if (this.props.lang !== prevProps.lang) {
            axios.post("http://localhost:8080/search", {
                query: this.props.query,
                lang: this.props.lang
            },
            {headers: {"Access-Control-Allow-Origin": "*" }})
            .then(res => {
                const tweets = res.data.data;
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
                <div class="center_loading">
                    {this.state.loading &&
                        <img src={loading} alt="Searching..."/>}
                </div>
                {this.state.noResults &&
                    <div class="center_noresults">
                        <b>No results found</b>
                        <img src={noResults} alt="No results found"/>
                    </div>
                }
                <TweetList tweets={this.state.tweets}/>
            </Container>
        );
    }
}

export default TweetResult;

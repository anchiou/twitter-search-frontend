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

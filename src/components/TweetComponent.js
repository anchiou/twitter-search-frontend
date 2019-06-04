import React from 'react';
import axios from 'axios';

class TweetResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
            /*
            name: "",       // display name
            screenName: "", // @username
            text: "",       // tweet content
            timestamp: "",  // UTC time of the tweet, convert
            favorites: 0,   // number of favorites
            retweets: 0,    // number of retweets
            location: [0,0] // coordinates
            */
        }
    }

    componentDidMount() {
        axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
          .then(res => {
            console.log(res)
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
          });
    }

    render() {
      return (
        <div>
          <h1>{`/r/${this.props.subreddit}`}</h1>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </div>
      );
  }
}


export default TweetResult;

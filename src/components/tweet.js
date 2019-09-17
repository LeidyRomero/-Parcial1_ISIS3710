import React from 'react';

export default class Tweet extends React.Component {
  state = { 
    "avatar":this.props.tweet.avatar,
    "first_name":this.props.tweet.first_name,
    "last_name":this.props.tweet.last_name,
    "nick":this.props.tweet.nick,
    "date":this.props.tweet.date,
    "content":this.props.tweet.content,
    "retweets":this.props.tweet.retweets,
    "favs":this.props.tweet.favs
  };

  renderState() {
    return (
        <div>
        <h2>{this.state.avatar}</h2>
        <h3>{this.state.first_name}</h3>
        <h2>{this.state.last_name}</h2>
        <h3>{this.state.nick}</h3>
        <h2>{this.state.date}</h2>
        <h3>{this.state.content}</h3>
        <h2>{this.state.retweets}</h2>
        <h3>{this.state.favs}</h3>
      </div>
    );
  }
  render() {
    return (
      <div>
		 {this.renderState()}
      </div>
    );
  }
}
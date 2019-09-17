import React from 'react';

export default class Trend extends React.Component {
  state = { 
    "hashtag": this.props.trend.hashtag,
		"teweets": this.props.tweet.teweets
  };
  renderState(){
    return (
      <div>
        <h2>{this.state.hashtag}</h2>
        <h3>{this.state.teweets}</h3>
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
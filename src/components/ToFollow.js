import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class ToFollow extends React.Component {
  state = { 
    "avatar":this.props.tweet.avatar,
    "first_name":this.props.tweet.first_name,
    "last_name":this.props.tweet.last_name
 };
  renderState(){
    return (
      <div>
        <h2>{this.state.avatar}</h2>
        <h3>{this.state.first_name}</h3>
        <h4>{this.state.last_name}</h4>
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
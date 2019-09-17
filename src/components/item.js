import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Item extends React.Component {
  state = { 
		"image": this.props.menu.image,
		"text": this.props.menu.text
 };
  renderState(){
    return (
      <div>
        <h2>{this.state.image}</h2>
        <h3>{this.state.text}</h3>
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
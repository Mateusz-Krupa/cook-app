import React, { Component } from 'react';
import './styles/Button.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
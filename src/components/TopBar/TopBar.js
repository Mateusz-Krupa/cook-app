import React, { Component } from 'react';
import './styles/TopBar.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className="TopBar">
        {this.props.children}
      </div>
    );
  }
}
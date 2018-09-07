import React, { Component } from 'react';
import TopBar from '../components/TopBar/TopBar';

export default class Recipe extends Component {
  render() {
    return (
      <div> 
        <TopBar> Recipes </TopBar> 
        Very nice recipe
      </div>
    );
  }
}
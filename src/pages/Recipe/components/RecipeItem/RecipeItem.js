import React, { Component } from 'react';
import './styles/RecipeItem.css';

export default class RecipeItem extends Component {
  render() {
    return (
        <div className="recipe-row">
          <img className="recipe-list-img" src={this.props.item.imgSmall} />
          <div className="recciple-overlay">
             <span><i class="fas fa-clock"></i> {this.props.item.time}</span>
             <span><span className="calory-icon">CAL</span> {this.props.item.calories}</span> 
          </div>
          <div className="recciple-overlay-title">
            {this.props.item.name}
          </div>
        </div>
    );
  }
}
import React, { Component } from 'react';
import './styles/RecipeItem.css';

export default class RecipeItem extends Component {
  render() {
    return (
        <div className="recipe-row">
          <img className="recipe-list-img" src={this.props.item.imgSmall} />
          <div className="recciple-overlay">
             <p>Time: {this.props.item.time}</p>
             <p>Calories: {this.props.item.calories}</p> 
             <p>Ingredienst: {this.props.item.ingredientsStatus}</p>
          </div>
          <div className="recciple-overlay-title">
            {this.props.item.name}
          </div>
        </div>
    );
  }
}
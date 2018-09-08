import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import RecipleItem from './components/RecipeItem/RecipeItem';
import './styles/Recipe.css';

export default class Recipe extends Component {


  get items(){
    return [
      {
        id: 1,
        time: '30 min',
        name: "Spaghetti Bolognese",
        imgSmall: "/static/letterbox_BeerSpaghetti.jpg",
        calories: "2000"
      },
      {
        id: 2,
        time: '50 min',
        name: "Chocolate dessert",
        imgSmall: "/static/deser.jpeg",
        calories: "2000"
      },
      {
        id: 3,
        time: '30 min',
        name: "Spaghetti Bolognese",
        imgSmall: "/static/letterbox_BeerSpaghetti.jpg",
        calories: "2000"
      },
      {
        id: 4,
        time: '50 min',
        name: "Chocolate dessert",
        imgSmall: "/static/deser.jpeg",
        calories: "2000"
      }
    ]
  }

  render() {
    return (
      <div> 
        <TopBar> Recipes </TopBar>
        <div className="separator"> Your recipes</div>
        {this.items.map(
          item =>  (<RecipleItem key={item.id} item={item}/>) 
        )}
      </div>
    );
  }
}
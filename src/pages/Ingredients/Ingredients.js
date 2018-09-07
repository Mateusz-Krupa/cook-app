import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import './styles/Ingredients.css';
export  default class Ingredients extends Component {


  get IngredientsMocks(){
    return [
      {
        name: "Potatos", 
        quantity: 20, 
        measure: "kg", 
      },
      {
        name: "Tomato", 
        quantity: 15, 
        measure: "g", 
      },
      {
        name: "Pasta",
        quantity: "200",
        measure: "dec"
      },
      {
        name: "Chickien",
        quantity: "2",
        measure: "kg"
      },
      {
        name: "Milk",
        quantity: "200",
        measure: "ml"
      },
      {
        name: "Egs",
        quantity: "10",
        measure: "pices"
      }
    ]
  }

  render() {
    return (
      <div>
        <TopBar> Ingredients </TopBar> 
        <div className="addButton">
          <i class="fas fa-plus"></i>
        </div> 
        <div>
        { 
          this.IngredientsMocks.map(item => (
          <div className="ingredients-list-row">
            <div>{item.name} </div> 
            <div>
              <span> {item.quantity}  {item.measure}</span>
              <span className="ingredients-list-next"> <i class="fas fa-chevron-right"></i> </span> 
            </div>
          </div>
          ))
        }
      </div>
      </div>
    );
  }
}
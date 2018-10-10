import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import IngredientsModal from './IngredientsModal';
import './styles/Ingredients.css';
export  default class Ingredients extends Component {


  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.closeModal = this.closeModal.bind(this);
    this.oepnModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState(
      {
        isModalVisible: false
      }
    )
  }

  openModal(){
    this.setState(
      {
        isModalVisible: true
      }
    )
  }

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
    const customStyles = {
      overlay: {
        zIndex: 100,
      },
      content : {
        top                   : '0',
        left                  : '0',
        right                 : '0',
        bottom                : '0',
      }
    };
    
    return (
      <div>
        <TopBar> Ingredients </TopBar> 
        <div className="addButton">
          <i className="fas fa-plus" onClick={this.oepnModal}></i>
        </div> 
        <div>
        { 
          this.IngredientsMocks.map(item => (
          <div className="ingredients-list-row">
            <div>{item.name} </div> 
            <div>
              <span> {item.quantity}  {item.measure}</span>
              <span className="ingredients-list-next"> <i className="fas fa-chevron-right"></i> </span> 
            </div>
          </div>
          ))
        }
      </div>
      <p>{this.state.isModalVisible}</p>
      <IngredientsModal 
        isModalVisible={this.state.isModalVisible}
        closeModal={this.closeModal}
      />
      </div>
    );
  }
}
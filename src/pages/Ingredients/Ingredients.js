import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Modal from 'react-modal';
import './styles/Ingredients.css';
export  default class Ingredients extends Component {


  constructor(props){
    super(props);
    this.state = {
      isModalVisible: true,
    };
    this.closeModal = this.closeModal.bind(this);
    this.oepnModal = this.oepnModal.bind(this);
  }

  closeModal(){
    this.setState(
      {
        isModalVisible: false
      }
    )
  }

  oepnModal(){
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
      <Modal
          isOpen={this.state.isModalVisible}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="modal-container">
          <div> Add Ingredients </div>
          <div>
            <ul>
              <li>Fruits</li>
              <li> Vegetables </li>
              <li> Spises </li>
              <li> ... </li>
            </ul>  
          </div>
          <div>
            <span className="modal-close__btn" onClick={this.closeModal}> 
              <i className="fa fa-times" /> Close 
            </span>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}
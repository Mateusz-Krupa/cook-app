import React, { Component } from 'react';
import Modal from 'react-modal';


const customStyles = {
  overlay: {
    zIndex: 100,
  },
  content : {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  }
};

const IngredientsModal = ({isModalVisible, closeModal}) => (
  <Modal
    isOpen={isModalVisible}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >
  <div className="modal-container">
    <div> Add Ingredients </div>
    <div>
        <label>
          <p> Ingredient </p>
          <input name="name" value={"potato"} />>
        </label>
        <input name="quantity" value={20} />>
    </div>
    <div>
      <span className="modal-close__btn" onClick={closeModal}> 
        <i className="fa fa-times" /> Close 
      </span>
    </div>
  </div>
  </Modal>
);

export default IngredientsModal;
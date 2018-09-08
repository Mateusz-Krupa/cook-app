import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/MainNavigationStyles.css';

export default class MainNavigation extends Component {
  render() {
    return (
      <div className="navContainer">
          <Link className="navItem" to="/basket">
            <div className="navIcon">
              <i className="fas fa-shopping-basket"></i>
            </div>
            Basket
          </Link>
          <Link className="navItem" to="/ingredients">
            <div className="navIcon">
              <i className="fas fa-list-ol"></i>
            </div>
            Ingredients
          </Link>
          <Link className="navItem" to="/recipes"> 
            <div className="navIcon"> 
              <i className="fas fa-file-alt"></i>
            </div>
            Reciples
          </Link>
          <Link className="navItem" to="/delivery">
            <div className="navIcon">
              <i className="fas fa-truck"></i>
            </div>
            Delivery
          </Link>
      </div>
    );
  }
}
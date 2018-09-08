import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import DataTable from './componentns/DataTable';
import Button from '../../components/Button/Button';
import './styles/Basket.css'

export default class Delivery extends Component {
  render() {
    return (
      <div>
        <TopBar> Basket </TopBar> 
        <DataTable></DataTable>
        <div className="basket-total-price"> Total price: <span>200 CHF</span></div> 
        <div className="basket-button"> 
          <Button>Buy and approve</Button>
        </div>
      </div>
    );
  }
}
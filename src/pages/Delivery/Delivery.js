import React, { Component } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import './styles/Delivery.css';

export default class Delivery extends Component {
  render() {
    return (
      <div> 
        <TopBar> Delivery </TopBar> 
        <div className="separator"> WEDNESDAY, DEC 12, 2018 10:30</div>
        <div className="delivery-row delivery-row__done"> 
          <div className="delivery-icon"></div>
            <div className="delivery-row-title">
              <p className="delivery-row-title__top">
                12 ingredients from Coop 
              </p>
              <p className="delivery-row-title__info">
                status: Done  
              </p>
            </div>
            <div>
              <div className="delivery-action"> Action </div>
            </div>
        </div>


        <div className="delivery-row delivery-row__inprogress"> 
          <div className="delivery-icon"></div>
            <div className="delivery-row-title">
              <p className="delivery-row-title__top">
                12 ingredients from Coop 
              </p>
              <p className="delivery-row-title__info">
                status: In progress  
              </p>
            </div>
            <div>
              <div className="delivery-action"> Action </div>
            </div>
        </div>

        <div className="delivery-row delivery-row__canceled"> 
          <div className="delivery-icon"></div>
            <div className="delivery-row-title">
              <p className="delivery-row-title__top">
                12 ingredients from Coop 
              </p>
              <p className="delivery-row-title__info">
                status: Canceled  
              </p>
            </div>
            <div>
              <div className="delivery-action"> Action </div>
            </div>
        </div>

      </div>
    );
  }
}
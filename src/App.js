import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MainNavigation from './components/MainNavigation/MainNavigation';
import Delivery from './pages/Delivery';
import Ingredients from './pages/Ingredients';
import Recipe from './pages/Recipe';
import TopBar from './components/TopBar/TopBar';
import Basket from './pages/Basket';

// import { Link } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopBar> Page Name </TopBar> 
          <div className="AppPageContainer">
            <Route path="/delivery" component={Delivery} />
            <Route path="/ingredients" component={Ingredients} />
            <Route path="/ingredients/id" component={Ingredients} />          
            <Route path="/recipes/:id" component={Recipe} />
            <Route path="/recipes" component={Recipe} />
            <Route path="/basket" component={Basket} />
          </div>
          <MainNavigation />
        </div>
      </Router>
    );
  }
}

export default App;

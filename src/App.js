import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import MainNavigation from './components/MainNavigation/MainNavigation';
import Delivery from './pages/Delivery';
import Ingredients from './pages/Ingredients/Ingredients';
import Recipe from './pages/Recipe/Recipe';
import Basket from './pages/Basket/Basket';

// import { Link } from 'react-router-dom'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
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

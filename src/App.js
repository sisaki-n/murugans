import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './Components/header/header.component';


function App() {
  return (
    <div className="App">   
    <Header/>
    <Switch>
    <Route exact path= '/' component={HomePage}></Route>
    <Route path ="/shop" component={ShopPage}></Route>
    </Switch> 
    </div>
  );
}

export default App;

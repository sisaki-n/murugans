import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>

  );

function App() {
  return (
    <div className="App">    
    <Route exact path= '/' component={HomePage}></Route>
    <Route path ="/Shop/hats" component={HatsPage}></Route>
        </div>
  );
}

export default App;

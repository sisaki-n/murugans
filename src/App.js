import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUpPage.Component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor()
  {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){

    this.unSubscribeFromAuth =auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">   
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path= '/' component={HomePage}></Route>
      <Route path ="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInAndSignUpPage} />
  
      </Switch> 
      </div>
    );
  }
 
}

export default App;

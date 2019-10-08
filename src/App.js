import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUpPage.Component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';

import {setCurrentUser} from './redux/user/user.actions';
class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth =auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot( snapshot =>{
       setCurrentUser({ 
            id: snapshot.id,
            ...snapshot.data()
        
      });         
    }); 

     }
    //  else{
      setCurrentUser(userAuth);
    // }

   
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div className="App">   
      <Header />
      <Switch>
      <Route exact path= '/' component={HomePage}></Route>
      <Route path ="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInAndSignUpPage} />
  
      </Switch> 
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

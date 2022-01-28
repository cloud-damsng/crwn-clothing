import React from 'react';
import './App.css';
import { auth } from './firebase/firebase.utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet
 
} from "react-router-dom";
import { Routes } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
//import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from './components/header/header.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return ( 
      <Header currentUser = {this.state.currenUser}/>,
      <HomePage/>
      );
}
}
export default App;
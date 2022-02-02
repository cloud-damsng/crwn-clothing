import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import { Route, Routes} from "react-router-dom";


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth){
        const userRef =await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(Snapshot=>{
          setCurrentUser({
              id: Snapshot.id,
              ...Snapshot.data()

          
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
    

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
  return ( 
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<App />} />,
      <Route path="/shop" element={<ShopPage />} />,
      <Route path="/signin" element={<SignInAndSignUpPage />} />,
      </Routes>
      <HomePage/>
      </div>
      );
}
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps) (App);
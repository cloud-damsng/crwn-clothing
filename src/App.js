import React from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

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
      <HomePage/>
      <Routes>
      <Route path="/" element={<App />} />,
      <Route path="/shop" element={<ShopPage />} />,
      <Route exact path="/checkout" element={<CheckoutPage />} />,
      <Route exact path="/signin" 
        render ={() =>
          this.props.currentUser ? (<Navigate to='/' />)
           : (
            <SignInAndSignUpPage/>
            )
            } 
            />
      </Routes>
      
      </div>
      );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps, 
  mapDispatchToProps) (App);
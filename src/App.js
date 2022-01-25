import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet
 
} from "react-router-dom";
import { Routes } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
//import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
function App() {
  return ( 
      <HomePage/>
      );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopPage from "./pages/shop/shop.component";
import Invoices from "./routes/invoices";
import Header from './components/header/header.component';
const rootElement = document.getElementById('root');

render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="*" element={<App />} />
    </Routes>
</BrowserRouter>,
rootElement
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

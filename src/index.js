import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store, persistor} from './redux/user/store';
const rootElement = document.getElementById('root');

render(
<Provider store={store}>
<BrowserRouter>
<PersistGate persistor = {persistor} >
    <Routes>
      <Route>
      <App />
      </Route>
    </Routes>
  </PersistGate>
</BrowserRouter>
</Provider>,
rootElement
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

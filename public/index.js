import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './Styles/index.css';
import App from '../src/App';

if (localStorage.getItem('ScandiwebCart') === null) {
  localStorage.setItem('ScandiwebCart', JSON.stringify([]))
} else {

}
if (localStorage.getItem('currency') === null) {
  localStorage.setItem('currency', JSON.stringify([]))
} else {

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter basename="/category">
    <App />
  </BrowserRouter>

);

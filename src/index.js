import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CCS from './pages/ccs';
import MarketAngelo from './pages/marketAngelo';
import Swim from './pages/swim';
import Council from './pages/council';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="ccs" element={<CCS />} />
      <Route path="marketAngelo" element={<MarketAngelo />} />
      <Route path="swim" element={<Swim />} />
      <Route path="council" element={<Council />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
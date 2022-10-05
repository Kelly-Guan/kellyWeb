import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CCS from './pages/ccs';
import MarketAngelo from './pages/marketAngelo';
import Swim from './pages/swim';
import Council from './pages/council';

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
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.baseURL = 'https://pi-countries-backend.up.railway.app/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


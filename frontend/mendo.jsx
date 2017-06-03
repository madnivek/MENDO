import React from 'react';
import ReactDOM from 'react-dom';
import { fetchSpecials } from './util/home_specials_api_util.js';
import axios from 'axios';


document.addEventListener('DOMContentLoaded', () => {
  window.fetchSpecials = fetchSpecials;
  ReactDOM.render(<h1>HELLO</h1>, document.getElementById('mendo'));
});

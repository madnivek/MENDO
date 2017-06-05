import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchProducts } from './util/products_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.fetchProducts = fetchProducts;
  ReactDOM.render(<Root store={store}/>, document.getElementById('mendo'));
});

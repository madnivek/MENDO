import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchItems } from './actions/banner_actions';
import { fetchProducts } from './actions/product_actions';

const Loader = () => {
  return(
    <div className="bookshelf_wrapper">
      <ul className="books_list">
        <li className="book_item first"></li>
        <li className="book_item second"></li>
        <li className="book_item third"></li>
        <li className="book_item fourth"></li>
        <li className="book_item fifth"></li>
        <li className="book_item sixth"></li>
      </ul>
      <div className="shelf"></div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Loader/>, document.getElementById('mendo'));
  const store = configureStore();

  fetchProducts()(store.dispatch).then(
    () => fetchItems()(store.dispatch).then(
      () => ReactDOM.render(<Root store={store}/>, document.getElementById('mendo'))));
});

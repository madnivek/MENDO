import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router';
import Header from './header/header';
import ProductsIndexContainer from './products/products_index_container';
import Homepage from './homepage/homepage';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path="/" component={ Header }>
          <IndexRedirect to="/homepage" />
          <Route path="/homepage" component={ Homepage }/>
          <Route path="/products" component={ ProductsIndexContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

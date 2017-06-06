import React from 'react';
import BookList from './book_list';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ product_slice }, { limit }) => {
  let products;
  let parsedLimit;
  if(limit){
    parsedLimit = parseInt(limit);
    products = Object.values(product_slice.products).slice(0,parsedLimit);
  } else {
    products = Object.values(product_slice.products);
  }
  return {
    products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

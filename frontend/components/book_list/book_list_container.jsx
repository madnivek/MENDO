import React from 'react';
import BookList from './book_list';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ product_slice }, ownProps ) => {
  let products;
  let parsedLimit;
  let limit = ownProps.limit;
  let path = "homepage";
  let listType = "featured";
  if(ownProps.route){
    path = ownProps.route.pathname;
    listType = "all";
  }

  if(limit){
    parsedLimit = parseInt(limit);
    products = Object.values(product_slice.products).slice(0,parsedLimit);
  } else {
    products = Object.values(product_slice.products);
  }
  return {
    products,
    path,
    listType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

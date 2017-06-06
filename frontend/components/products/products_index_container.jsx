import React from 'react';
import ProductsIndex from './products_index';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ product_slice }) => {
  return {
    products: Object.values(product_slice.products)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);

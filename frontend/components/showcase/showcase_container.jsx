import React from 'react';
import Showcase from './showcase';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ product_slice }, { productId }) => {
  let product, title, imgUrl, description;

  if(Object.keys(product_slice.products).length !== 0) {
    product = product_slice.products[productId];
    title = product.title;
    imgUrl = product.img_url;
    description = product.description;
  }

  return {
    title,
    imgUrl,
    description
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);

import * as ProductsAPIUtil from '../util/products_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveProducts = products => {
  debugger
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchProducts = () => dispatch => {
  return ProductsAPIUtil.fetchProducts()
    .then( products => dispatch(receiveProducts(products)),
      err => dispatch(receiveErrors(err))
  );
};

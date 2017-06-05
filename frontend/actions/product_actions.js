import * as ProductsAPIUtil from '../util/products_api_util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const parseProducts = products => {
  const productObj = {};
  products.forEach( product => {
    productObj[product.id] = {
      title: product.title.rendered
    };
  });
  debugger
  return productObj;
};

export const receiveProducts = products => {
  return {
    type: RECEIVE_PRODUCTS,
    products: parseProducts(products)
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

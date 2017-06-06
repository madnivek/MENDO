import merge from 'lodash/merge';
import {
  RECEIVE_PRODUCTS,
  RECEIVE_ERRORS
} from '../actions/product_actions';

const _defaultState = {
  products: {},
  errors: []
};

const ProductReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_PRODUCTS: {
      const newState = merge({}, oldState);
      newState.products = action.products;
      return newState;
    }

    case RECEIVE_ERRORS: {
      const newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    }

    default: {
      return oldState;
    }
  }
};

export default ProductReducer;

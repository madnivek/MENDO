import merge from 'lodash/merge';
import {
  RECEIVE_PRODUCTS,
  RECEIVE_ERRORS
} from '../actions/product_actions';

const _defaultState = {
  products: {},
  errors: []
};

const ProductReducer = (oldstate = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_PRODUCTS: {
      const newState = merge({}, oldstate);
      newState.products = action.products;
      return newState;
    }

    case RECEIVE_ERRORS: {
      const newState = merge({}, oldstate);
      newState.errors = action.errors;
      return newState;
    }

    default: {
      return _defaultState;
    }
  }
};

export default ProductReducer;

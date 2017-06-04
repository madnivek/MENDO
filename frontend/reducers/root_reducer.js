import { combineReducers } from 'redux';
import ProductReducer from './product_reducer';

export default combineReducers({
  products_slice: ProductReducer
});

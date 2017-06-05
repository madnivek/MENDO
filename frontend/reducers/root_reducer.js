import { combineReducers } from 'redux';
import ProductReducer from './product_reducer';
import BannerReducer from './banner_reducer';

export default combineReducers({
  products_slice: ProductReducer,
  banner_slice: BannerReducer
});

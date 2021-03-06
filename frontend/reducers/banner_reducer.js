import merge from 'lodash/merge';
import {
  RECEIVE_ITEMS,
  RECEIVE_ERRORS
} from '../actions/banner_actions';

const _defaultState = {
  items: {},
  errors: []
};

const BannerReducer = (oldState = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_ITEMS: {
      const newState = merge({}, oldState);
      newState.items = action.items;
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

export default BannerReducer;

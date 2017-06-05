import * as BannerAPIUtil from '../util/banner_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveItems = items => {
  return {
    type: RECEIVE_ITEMS,
    items: {
      id: items.id,
      title: items.title.rendered,
      img_url: items.better_featured_media.source_url
    }
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchItems = () => dispatch => {
  return BannerAPIUtil.fetchProducts()
    .then( items => dispatch(receiveItems(items)),
      err => dispatch(receiveErrors(err))
  );
};

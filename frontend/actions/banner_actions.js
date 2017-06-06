import * as BannerAPIUtil from '../util/banner_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const parseItems = items => {
  const itemObj = {};
  items.forEach( item => {
    itemObj[item.id] = {
      title: item.title.rendered,
      img_url: item.better_featured_image.source_url
    };
  });
  return itemObj;
};

export const receiveItems = items => {
  return {
    type: RECEIVE_ITEMS,
    items: parseItems(items)
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const fetchItems = () => dispatch => {
  return BannerAPIUtil.fetchItems()
    .then( items => dispatch(receiveItems(items)),
      err => dispatch(receiveErrors(err))
  );
};

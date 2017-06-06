import React from 'react';
import Banner from './banner';
import { fetchItems } from '../../actions/banner_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({banner_slice}) => {
  return {
    items: Object.values(banner_slice.items)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);

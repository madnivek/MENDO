import { connect } from 'react-redux';
import ProductsIndex from './products_index';
import { fetchProducts } from '../../actions/product_actions';

const mapStateToProps = ({ products, errors }) => {
  return {
    products,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsIndex);

import React from 'react';

class ProductsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    return(
      <div>TO BE IMPLEMENTED</div>
    );
  }
}

export default ProductsIndex;

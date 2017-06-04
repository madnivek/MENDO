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
      <div>HELLO</div>
    );
  }
}

export default ProductsIndex;

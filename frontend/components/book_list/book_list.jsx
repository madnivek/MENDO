import React from 'react';
import InfoSection from '../info-section';
import {CSSTransitionGroup} from 'react-transition-group';
class BookList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    const colors = ["yellow", "pink", "purple", "blue"];
    const products = this.props.products.map( (product,index) => {
      let color = colors[index%4];
      return(
        <div className={`product-container ${color}`} key={product.title}>
          <img src={product.img_url}/>
          <InfoSection
            title={product.title}
            headline="Featured"
            description={product.description}
            />
        </div>
      );
    });

    return(
      <CSSTransitionGroup
        transitionName="page-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="book-list">
          <h1>What's New</h1>
          { products }
        </div>
      </CSSTransitionGroup>
    );
  }
}

export default BookList;


//
// <h1>{this.props.title}</h1>
// <h4>Book highlight</h4>
// <p>{ description }</p>

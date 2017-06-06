import React from 'react';

class Showcase extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    let description;
    if(this.props.description){
      description = this.props.description.slice(3, -5);
    }
    return(
    <div className="showcase">
      <section className="sc-description">
        <span className="price">$70</span>
        <h1>{this.props.title}</h1>
        <h4>Book highlight</h4>
        <p>{ description }</p>
      </section>
      <section className="sc-image">
        <span className="price">BUY</span>
        <img src={this.props.imgUrl}/>
      </section>
    </div>
    );
  }
}

export default Showcase;

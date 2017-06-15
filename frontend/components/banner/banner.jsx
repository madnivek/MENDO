import React from 'react';
import Loader from '../loader/loader';

class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state = {color: "banner-black"};
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  setColor(color){
    this.setState({color});
  }

  render(){
    const bannerImages = this.props.items.map( (item, index) => {
      const colors = ["banner-yellow", "banner-black", "banner-pink"];
      return(
        <li
          onMouseEnter={ () => this.setColor(colors[index])}
          className={`banner${index+1}`}key={item.title}>
          <img src={item.img_url}/>
          <p className="item-text">{item.title}</p>
        </li>
      );
    });

    return(
      <div className={`banner ${this.state.color}`}>
        <ul>
          { bannerImages }
        </ul>
      </div>
    );
  }
};

export default Banner;

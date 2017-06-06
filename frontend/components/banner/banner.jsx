import React from 'react';

class Banner extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchItems();
  }

  render(){
    const bannerImages = this.props.items.map( (item, index) => {
      return(
        <li className={`banner${index+1}`}key={item.title}>
          <img src={item.img_url}/>
          <p className="item-text">{item.title}</p>
        </li>
      );
    });

    return(
      <div className="banner">
        <ul>
          { bannerImages }
        </ul>
      </div>
    );
  }
};

export default Banner;

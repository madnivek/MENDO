import React from 'react';
import Banner from '../banner/banner';

class Homepage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="homepage">
        <Banner/>
      </div>
    );
  }
}

export default Homepage;

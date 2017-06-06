import React from 'react';
import BannerContainer from '../banner/banner_container';
import ShowcaseContainer from '../showcase/showcase_container';
import BookListContainer from '../book_list/book_list_container';

class Homepage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="homepage">
        <BannerContainer/>
        <ShowcaseContainer productId="11"/>
        <BookListContainer limit="4"/>
      </div>
    );
  }
}

export default Homepage;

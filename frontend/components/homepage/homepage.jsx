import React from 'react';
import BannerContainer from '../banner/banner_container';
import ShowcaseContainer from '../showcase/showcase_container';
import BookListContainer from '../book_list/book_list_container';
import {CSSTransitionGroup} from 'react-transition-group';

class Homepage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){      
    return(
      <CSSTransitionGroup
        transitionName="page-transition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="homepage">
          <BannerContainer/>
          <ShowcaseContainer productId="11"/>
          <BookListContainer limit="4"/>
        </div>
      </CSSTransitionGroup>

    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//import Header from './Header';
import FixedMenu from '../containers/FixedMenu';
import HomePageLayout from '../containers/HomePageLayout';
import JavaScript from './Javascript';
import FlashPage from '../containers/FlashPage';


class App extends Component {
  componentDidMount() {
    this.props.fetchCards();
    this.props.fetchUser();
    console.log('COMPONENT DID MOUNT; this.props', this.props);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <FixedMenu />
            <Route exact path="/" component={HomePageLayout} />
            {/* <Route exact path="/api/current_user" component={CurrentUser} />*/}
            <Route path="/javascript" component={JavaScript} />
            <Route path="/flashPage" component={FlashPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('MAPSTATETOPROPS', state);
  return {auth: state.auth}
}

export default connect(mapStateToProps, actions)(App);

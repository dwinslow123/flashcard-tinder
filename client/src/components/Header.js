import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments';

class Header extends Component {
  renderContent() {
    console.log(' *** THIS.props.auth >>>>', this.props.auth);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          // <li key="1">Payments</li>,
          // <li key="3" style={{ margin: '0 10px' }}>
          //   Credits: derp
          // </li>,
          <li key="2"><a href="/">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/' : '/'}
            className="left brand-logo"
          >
            Studdy Buddy Home
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
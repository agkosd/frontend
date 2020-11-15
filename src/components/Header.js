import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";

class Header extends React.Component {
  renderFunc() {
    if (this.props.auth.isSignedIn) {
      return (
        <React.Fragment>
          <Link to="/item/new" className="item">
            <h3>List Item</h3>
          </Link>
          <Link to="/item/search" className="item">
            <h3>Search Item</h3>
          </Link>
        </React.Fragment>
      );
    }
    return;
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <h2>Iborrow App</h2>
        </Link>
        <div className="right menu">
          {this.renderFunc()}
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, {})(Header);
import React from "react";
import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    if (this.props.auth) {
      return (
        <div>
          <h1>WELCOME TO I BORROW APP</h1>
          <h6>Click on List Item/ Search Item to start using the app</h6>
        </div>
      );
    } else {
      return (
        <div>
          <h1>WELCOME TO I BORROW APP</h1>
          <h6>TO START USING THE FUNCTIONALITY SIGN IN WITH GOOGLE</h6>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Welcome);

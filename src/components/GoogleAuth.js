import React from "react";
import {connect} from "react-redux";
import {signIn, signOut, userLogin,userLogout} from "../actions";     //import 并在最下方

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "470335105512-20s79ta58s8nr2c6ideqfbnncg9neaql.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          const profile = this.auth.currentUser.get().getBasicProfile()
          if (profile) {
            this.googeUserInfo(profile);
          }

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {   
    this.auth.signIn().then((data) => {
      this.googeUserInfo(data.getBasicProfile());
    });


  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.userLogout();
      this.props.signOut();
    }
  };

  authButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={() => {
            this.onSignOutClick();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            this.onSignInClick();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }
// User Info
  googeUserInfo(profile) {
    if (!profile) {
      return;
    }
    const userInfo = {
      userId: profile.getId(),
      name: profile.getName(),
      image: profile.getImageUrl(),
      email: profile.getEmail(),
    }
    this.props.userLogin(userInfo);
  }


  render() {
    return <h1>{this.authButton()}</h1>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut,userLogin,userLogout })(GoogleAuth);

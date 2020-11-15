import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { getProduct } from "../actions/index";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link } from "react-router-dom";

class BookSlot extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  renderMap() {
    if (this.props.loc) {
      return (
        <Map
          google={this.props.google}
          zoom={8}
          style={{
            width: "100%",
            height: "500px",
          }}
          initialCenter={{ lat: this.props.loc.lat, lng: this.props.loc.long }}
        >
          <Marker
            position={{ lat: this.props.loc.lat, lng: this.props.loc.long }}
          />
        </Map>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }

  calValues() {
    if (!this.props.from) {
      return {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      };
    } else {
      let x = new Date(this.props.from);
      let y = new Date(this.props.till);
      return {
        startDate: new Date(this.props.from),
        endDate: new Date(this.props.till),
      };
    }
  }

  renderDates() {
    if (this.props.from) {
      this.calValues();
      return (
        <div className="container">
          <h3>Availability</h3>
          <DateRangePicker
            ranges={[this.calValues()]}
            onChange={() => console.log("hello")}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="ui grid form">
        <div className="eight wide column">{this.renderDates()}</div>
        <div className="eight wide column">{this.renderMap()}</div>
        <Link
          to={`/item/payments/${this.props.match.params.id}`}
          className="ui green button"
        >
          Buy Now
        </Link>
        <Link to="/item/search" className="ui negative button">
          Browse Other Items
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (!state["prod"][ownProps.match.params.id]) {
    return {};
  } else {
    return {
      loc: state["prod"][ownProps.match.params.id]["loc"],
      from: state["prod"][ownProps.match.params.id]["from"],
      till: state["prod"][ownProps.match.params.id]["till"],
    };
  }
};

const Container = connect(mapStateToProps, { getProduct })(BookSlot);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAXQub7NBM6wMnGtScgXngxdNx1VqPhpiw",
})(Container);

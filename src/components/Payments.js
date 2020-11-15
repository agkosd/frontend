import React from "react";
import { Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../actions/index";
import { connect } from "react-redux";

class Payments extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <div className="item">
          <div className="right floated content">
            <Link
              to={`/item/paymentConfirmation/${this.props.match.params.id}`}
              className="ui button green"
            >
              Pay Now
            </Link>
          </div>
          <i className="large credit card middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Credit Card</h4>
            <div className="description">Pay Using Credit Card</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <Link
              to={`/item/paymentConfirmation/${this.props.match.params.id}`}
              className="ui button green"
            >
              Pay Now
            </Link>
          </div>
          <i className="large money middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Cash</h4>
            <div className="description">Pay Using Cash</div>
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
            <Link
              to={`/item/paymentConfirmation/${this.props.match.params.id}`}
              className="ui button green"
            >
              Pay Now
            </Link>
          </div>
          <i className="large paypal middle aligned icon "></i>
          <div className="content">
            <h4 className="header">Paypal</h4>
            <div className="description">Pay Using Paypal</div>
          </div>
        </div>
        <Link to={`/item/search`} className="ui button negative">
          Cancel
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { item: state.prod[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getProduct, deleteProduct })(
  Payments
);

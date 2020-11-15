import React from "react";
import { connect } from "react-redux";
import { deleteProduct, getProduct } from "../actions/index";
import Modal from "./modal";
import history from "../history";
import { Link } from "react-router-dom";

class Confirmation extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  renderContent() {
    if (!this.props.item) {
      return "Are you sure you want to purchase this Product?";
    } else {
      return `Are you sure you want to purchase this Product:${this.props.item.name}?`;
    }
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            alert("Payment Successful Check Email For More Details!");
            this.props.deleteProduct(this.props.match.params.id);
          }}
          className="ui green button"
        >
          Buy
        </button>
        <Link to="/item/search/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => {
          history.push(`/item/payments/${this.props.match.params.id}`);
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { item: state.prod[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getProduct, deleteProduct })(
  Confirmation
);

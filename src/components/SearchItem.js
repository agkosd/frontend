import React, { setState } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/index";
import { Link } from "react-router-dom";

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", term: "" };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderSup(product) {
    if (product.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/item/edit/${product.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/item/delete/${product.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderInput = ({ input, label }) => {
    return (
      <div>
        <h4>{label}</h4>
        <input {...input} type="text" />
      </div>
    );
  };

  renderedList() {
    if (this.state.term) {
      return this.props.products.map((product) => {
        if (product.name === this.state.term) {
          return (
            <div className="item" key={product.id}>
              {this.renderSup(product)}
              <i className="large middle aligned icon" src={product.url} />
              <div className="content">
                <Link to={`/item/${product.id}`} className="header">
                  {product.name}
                </Link>
                <div className="description">{product.description}</div>
              </div>
            </div>
          );
        } else return "";
      });
    } else {
      return this.props.products.map((product) => {
        return (
          <div className="item" key={product.id}>
            {this.renderSup(product)}
            <i className="large middle aligned icon" src={product.url} />
            <div className="content">
              <Link to={`/item/${product.id}`} className="header">
                {product.name}
              </Link>
              <div className="description">{product.description}</div>
            </div>
          </div>
        );
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.getProducts();
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
          value={this.state.term}
        />
        <button className="ui button primary">Search</button>
        <div className="ui relaxed divided list">{this.renderedList()}</div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.prod),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { getProducts })(SearchItem);

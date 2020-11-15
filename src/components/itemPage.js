import React from "react";
import { connect } from "react-redux";
import { getProduct, addComment, getComment } from "../actions/index"; //import addcomment & getcomment
import { Link } from "react-router-dom";

class itemPage extends React.Component {
  //state
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
    this.props.getComment(id);
  }

  renderSup() {
    const product = this.props.prod;
    const auth = this.props.auth;
    console.log(auth);
    if (product.userId === auth.userId && auth.isSignedIn) {
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
    } else {
      return (
        <div className="container">
          <Link
            to={`/item/insurance/${product.id}`}
            className="ui button green"
          >
            Check Insurance
          </Link>
        </div>
      );
    }
  }

  // Comment Render
  renderComment() {
    const { comment } = this.props;
    return (
      <>
        <div className="comment-list">
          {comment &&
            comment.length > 0 &&
            comment.map((item, index) => {
              return (
                <div className="row comment-item" key={index}>
                  <div className="col-1 item-heade">
                    <div
                      className="image-head"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                  </div>
                  <div className="col-7 ">
                    <div className="row">
                      <div className="item-name">{item.name}</div>
                      <div className="item-create-time">{item.create_time}</div>
                    </div>
                    <div className="row">
                      <div className="item-content">{item.content}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="addComment">
          <div className="row">
            <div className="col-1 text-right">Comment</div>
            <div className="col-7">
              <textarea
                className="text"
                placeholder="Please enter comment content"
                value={this.state.content}
                onChange={(e) => {
                  // this.state.content = e.target.value;
                  this.setState({ content: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6">
              <button
                className="ui button primary"
                onClick={this.handleAddComment.bind(this)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Handle Add Comment
  handleAddComment() {
    if (!this.state.content.trim()) {
      return;
    }
    const ui = this.props.userInfo;
    const { id } = this.props.match.params;
    const data = {
      detail_id: id,
      ...ui,
      content: this.state.content,
      create_time: new Date(),
    };
    this.props.addComment(data).then(() => {
      this.setState({ content: "" });
    });
  }

  render() {
    if (!this.props.prod) {
      return (
        <div>
          <h1>Loading.....</h1>
        </div>
      );
    } else if (this.props.prod) {
      const item = this.props.prod;
      return (
        <div className="ui items">
          <div className="item">
            <div className="ui medium image">
              <img src={`${item.url}`} />
            </div>
            <div className="content">
              <h1>{item.name}</h1>
              <div className="meta">
                <span className="price">
                  <span>Price:</span>&nbsp;${item.price}&nbsp;
                </span>
                <span className="stay">
                  <span>Availability:</span>&nbsp;
                  {Math.abs(new Date(item.till) - new Date(item.from)) /
                    (1000 * 60 * 60 * 24)}
                  &nbsp;days
                </span>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          {this.renderSup()}
          <div className="comment">{this.renderComment()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownprops",ownProps);
  return {
    prod: state.prod[ownProps.match.params.id],
    auth: state.auth,
    userInfo: state.userInfo,
    comment: state.comment,
  };
};

export default connect(mapStateToProps, { getProduct, addComment, getComment })(
  itemPage
);

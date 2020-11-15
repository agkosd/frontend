import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { setLocation } from "../actions/index";

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.props.setLocation(position.coords);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <h3>{label}</h3>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="name"
          label="Item Name"
          component={this.renderInput}
          type="text"
          value={this.state.value}
        />
        <Field
          name="price"
          label="Price"
          component={this.renderInput}
          type="number"
        />
        <Field
          name="url"
          label="Image URL"
          component={this.renderInput}
          type="text"
        />
        <Field
          name="from"
          label="Available From"
          component={this.renderInput}
          type="date"
        />
        <Field
          name="till"
          label="Available To"
          component={this.renderInput}
          type="date"
        />
        <Field
          name="description"
          label="Item Description"
          component={this.renderInput}
          type="text"
        />
        <h3>Your Location:</h3>
        <h4>Latitude: {this.props.loc.lat}</h4>
        <h4>Longitude: {this.props.loc.long}</h4>

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const d1 = new Date(formValues.from);
  const d2 = new Date(formValues.till);
  const errors = {};
  if (!formValues.name) {
    errors.name = "Please Enter The Name Of The Item";
  }
  if (d2 < d1) {
    errors.from = "Please Enter Valid Dates";
    errors.till = "Please Enter Valid Dates";
  }
  if (!formValues.price) {
    errors.price = "This Field Cannot Be Left Blank";
  }
  if (formValues.price < 0) {
    errors.price = "Price Should Be Greater Than Zero";
  }
  if (!formValues.description) {
    errors.description = "This Field Cannot Be Left Blank";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return { loc: state.loc };
};

const formWrapped = reduxForm({
  form: "productForm",
  validate,
})(ProductForm);

export default connect(mapStateToProps, { setLocation })(formWrapped);

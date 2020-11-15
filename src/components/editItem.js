import React from "react";
import { connect } from "react-redux";
import { getProduct, editProduct } from "../actions/index";
import _ from "lodash";
import ProductForm from "./productForm";

class EditItem extends React.Component {
    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editProduct(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.info) {
            return <div>Loading....</div>;
        }
        return (
            <div>
                <h3>Edit Product</h3>
                <ProductForm
                    initialValues={this.props.info }
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { info: state.prod[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getProduct, editProduct })(EditItem);
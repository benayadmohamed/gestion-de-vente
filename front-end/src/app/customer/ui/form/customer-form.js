import React, { Component } from 'react';
import { requestAddCat } from "../../store/actions";
import { connect } from "react-redux";
import Customer from "../../model/customer";
import { Field, reduxForm } from "redux-form";
import { addCatService } from "../../store/services";

class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = { customer: { id: '', name: '' } };
    }


    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <Field name="name" component="input" type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        onSubmit: values => dispatch(addCatService(values))

    }
}
CustomerForm = reduxForm({
    // a unique name for the form
    form: 'customer'
})(CustomerForm)

export default connect(
    null, mapDispatchToProps
)(CustomerForm)
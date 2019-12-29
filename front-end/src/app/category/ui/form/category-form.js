import React, {Component} from 'react';
import {requestAddCat} from "../../store/actions";
import {connect} from "react-redux";
import Category from "../../model/category";
import {Field, reduxForm} from "redux-form";
import {addCatService} from "../../store/services";

class CategoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {category: {id: '', name: ''}};
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <Field name="name" component="input" type="text"/>
                </label>
                <input type="submit" value="Submit"/>
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
CategoryForm = reduxForm({
    // a unique name for the form
    form: 'category'
})(CategoryForm)

export default connect(
    null, mapDispatchToProps
)(CategoryForm)
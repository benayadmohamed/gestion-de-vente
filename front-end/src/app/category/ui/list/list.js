import React, {Component} from 'react';
import {fetchPostsIfNeeded} from "../../store/services";
import {applyMiddleware as dispatch} from "redux";
import rootStore from "../../../store/root-store";
import {connect} from "react-redux";

class List extends Component {

    componentDidMount() {
        rootStore.dispatch(fetchPostsIfNeeded());
        console.log("jaaaaaaaaaaaaaaaaaaaaaaaaaaa", this.props.categories, this.state);
    }

    render() {
        const categories = this.props.categories.map(value => {
            return <tr id={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
            </tr>
        });

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                    </thead>
                    <tbody>
                    {categories}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.category.categories
    }
}


export default connect(
    mapStateToProps
)(List)

// export default List;
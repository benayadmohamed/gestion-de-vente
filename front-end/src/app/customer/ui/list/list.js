import React, { Component } from 'react';
import { fetchPostsIfNeeded } from "../../store/services";
import { applyMiddleware as dispatch } from "redux";
import rootStore from "../../../store/root-store";
import { connect } from "react-redux";

class List extends Component {

    componentDidMount() {
        rootStore.dispatch(fetchPostsIfNeeded());
        console.log("jaaaaaaaaaaaaaaaaaaaaaaaaaaa", this.props.customers, this.state);
    }

    render() {
        const customers = this.props.customers.map(value => {
            return <tr key={value.id}>
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
                        {customers}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customer.customers
    }
}


export default connect(
    mapStateToProps
)(List)

// export default List;
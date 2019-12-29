import {addCatSuccess, receiveCustomers, requestAddCat, requestCustomers} from "./actions";
import axios from 'axios';

export function addCatService(customer) {
    return dispatch => {
        dispatch(requestAddCat())
        axios.post('http://localhost:8080/customer-service/customers', customer)
            .then(res => {
                const customer = res.data;
                alert(JSON.stringify(customer));
                dispatch(addCatSuccess(customer))
            }).catch(err => {
            console.log("HHHHHHHHHHHHHHHHHh")
        });
    }
}


function fetchPosts() {
    return dispatch => {
        dispatch(requestCustomers())
        axios.get('http://localhost:8080/customer-service/customers?projection=fullCustomer')
            .then(res => {
                const customers = res.data._embedded.customers;
                dispatch(receiveCustomers(customers))
            }).catch(err => {
            console.log("HHHHHHHHHHHHHHHHHh")
        });
    }
}

function shouldFetchPosts(state) {
    const customers = state.customers
    if (!customers) {
        return true
    } else if (state.isFetching) {
        return false
    } else {
        return state.didInvalidate
    }
}

export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        console.log("getstate", getState())
        if (shouldFetchPosts(getState())) {
            return dispatch(fetchPosts())
        }
    }
}
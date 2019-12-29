import {REQUEST_ADD_CAT, RECEIVE_CUSTOMERS, REQUEST_CUSTOMERS, RESPONSE_ADD_CAT_SUCCESS} from "./actions";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    customers: []
}

export default function customerApp(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ADD_CAT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        case RESPONSE_ADD_CAT_SUCCESS:
            return Object.assign({}, state, {
                customers: [
                    ...state.customers, action.customer
                ]
            })
        case RECEIVE_CUSTOMERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                customers: action.customers
            })
        case REQUEST_CUSTOMERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        default:
            return state
    }
}

import {REQUEST_ADD_CAT, RECEIVE_CATEGORIES, REQUEST_CATEGORIES, RESPONSE_ADD_CAT_SUCCESS} from "./actions";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    categories: []
}

export default function categoryApp(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ADD_CAT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        case RESPONSE_ADD_CAT_SUCCESS:
            return Object.assign({}, state, {
                categories: [
                    ...state.categories, action.category
                ]
            })
        case RECEIVE_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                categories: action.categories
            })
        case REQUEST_CATEGORIES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        default:
            return state
    }
}

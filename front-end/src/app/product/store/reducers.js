import {ADD_Product, INIT_LIST_Product} from "./actions";

const initialState = {
    products: []
}

export default function productApp(state = initialState, action) {
    switch (action.type) {
        case ADD_Product:
            return Object.assign({}, state, {
                products: [
                    ...state.products, action.product
                ]
            })
        case INIT_LIST_Product:
            return Object.assign({}, state, {
                products: action.products
            })
        default:
            return state
    }
}
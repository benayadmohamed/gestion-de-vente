import {combineReducers} from "redux";
import customerApp from "../customer/store/reducers";
import productApp from "../product/store/reducers";
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers(
    {
        customer: customerApp,
        product: productApp,
        form: formReducer
    }
)

export default rootReducer;
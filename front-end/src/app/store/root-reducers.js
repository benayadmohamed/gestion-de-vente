import {combineReducers} from "redux";
import categoryApp from "../category/store/reducers";
import productApp from "../product/store/reducers";
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers(
    {
        category: categoryApp,
        product: productApp,
        form: formReducer
    }
)

export default rootReducer;
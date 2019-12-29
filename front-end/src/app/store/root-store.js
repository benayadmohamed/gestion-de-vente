import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root-reducers";
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()

const rootStore = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
export default rootStore;
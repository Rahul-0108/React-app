import {applyMiddleware, createStore , combineReducers} from "redux"
import {userReducer , bookReducer} from "./Reducer"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension'

export const store= createStore(combineReducers({user: userReducer,book: bookReducer}) ,composeWithDevTools(applyMiddleware(logger)));
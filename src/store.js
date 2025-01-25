import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from 'redux-thunk'
import weatherAPIData from './Redux/Reducer';

const rootReducer = combineReducers({
    weather: weatherAPIData
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
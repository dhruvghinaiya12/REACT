import { postreducer } from "./reducer";
import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";


const rootreducer = combineReducers({
  postData: postreducer,
});

export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

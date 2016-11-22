import { combineReducers } from 'redux';

import { routeReducer } from 'react-router-redux'
// app reducers
import reducer from './reducer';


export default function createReducer() {
  return combineReducers({
    routing: routeReducer,
    reducer: reducer,
  });
}


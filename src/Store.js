import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import createHistory from 'history/createHashHistory';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  routing: routerReducer
});

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const logger = createLogger({
  // ...options
  options:{
    timestamp:true
  }
});

const win = window;
const storeEnhancers = compose(
  applyMiddleware(logger,thunk,middleware),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

const initialState = {};
//const initialState = {};
export const store = createStore(reducer, initialState, storeEnhancers);

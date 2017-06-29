import {applyMiddleware, createStore, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {history} from '../router/history';

import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';
// Create a history of your choosing (we're using a browser history in this case)
// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);


const middlewares = [
  thunk,
  historyMiddleware,
];

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
);

const configureStore = preloadedState => {
  const store = createStore(rootReducer, preloadedState, storeEnhancers);
  return store;
}
export default configureStore;

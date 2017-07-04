import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import account from '../components/demo/initializeFromState/account';

const rootReducer = combineReducers({
  routerReducer,
  account,
  form:formReducer,
});

export default rootReducer;

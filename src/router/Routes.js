import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from '../store/configureStore';
import { history } from '../router/history';
import { MainRouter } from './MainRouter';

let initStore = {
  form:{
    login:{
      userName:'test',
      password:'111111',
    }
  }
}
const store = configureStore(initStore);

const Routes = () => (
  <Provider store={store}>
    <div>
      <ConnectedRouter history={history}>
        <MainRouter></MainRouter>
      </ConnectedRouter>
    </div>
  </Provider>
);

export default Routes;

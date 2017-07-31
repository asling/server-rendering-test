import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Routing from '../common/routes';
import configureStore from '../common/store/configureStore'
import { BrowserRouter } from 'react-router-dom';
import history from '../common/history/browser';

const store = configureStore(window.__initialState__);

render(
	<Provider store={store}>
      <BrowserRouter>
      	<Routing />
      </BrowserRouter>
    </Provider>,
    document.getElementById("app")
);

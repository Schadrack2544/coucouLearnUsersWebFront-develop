/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'assets/css/index.css';
import App from 'App';
import AppProviders from 'AppProviders';
import getStore from './config/store';

const rootEl = document.getElementById('root');
const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <AppProviders>
      <App />
    </AppProviders>
  </Provider>,
  rootEl,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <AppProviders>
          <NextApp />
        </AppProviders>
      </Provider>,
      rootEl,
    );
  });
}

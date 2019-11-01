import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';

if (typeof window !== 'undefined') {
  const history = createBrowserHistory();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhancers());

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,

    document.getElementById('app'),
  );

}


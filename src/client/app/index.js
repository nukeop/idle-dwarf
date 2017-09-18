import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';


import './app.global.scss';

import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('react_container')
  );
}

render(App);

if (module.hot) {
  module.hot.accept( () => {
    render(App);
  });
}

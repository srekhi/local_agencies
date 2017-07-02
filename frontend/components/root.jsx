import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

//root exists to wrap App component (top-level) in a Provider

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default Root;

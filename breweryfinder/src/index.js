import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/************************* my imports  *********************************************/
import { appReducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';


/*********************create store  ***************************************************/
const store = createStore(appReducer,
  applyMiddleware(logger,thunk));

/********************* wrapped Provider around app  *****************************************/

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



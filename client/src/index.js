import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers/index';

// import promise from 'redux-promise';
// import './index.css';
import axios from 'axios';
window.axios = axios;

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk), );

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') );
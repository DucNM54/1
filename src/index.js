import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import ReactDOM from 'react-dom/client';
// import createSagaMiddleware from 'redux-saga';
import allReducers from './redux/reducer/All';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import  configureStore  from './core/store';
// import rootSaga from './redux/middleware/saga/root';
// const sagaMiddleware = createSagaMiddleware();
// export let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);
const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

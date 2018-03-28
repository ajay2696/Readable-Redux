/*global document*/
/*gloabl window*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Redux,{createStore,applyMiddleware,compose} from 'redux';
import AppReducer from './reducers/AppReducer';
import {Provider} from 'react-redux';

const store = createStore(
    AppReducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

/*global document*/
/*gloabl window*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware,compose} from 'redux';
import AppReducer from './reducers/AppReducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

const composeEnhacers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const store = createStore(
    AppReducer
    ,composeEnhacers(applyMiddleware(logger,thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

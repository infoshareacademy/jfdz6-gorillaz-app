import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";
import MainRouter from './MainRouter';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <MainRouter />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

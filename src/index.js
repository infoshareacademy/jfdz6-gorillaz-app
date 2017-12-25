import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from "./store";
import Auth from './Auth';
import MainRouter from './MainRouter';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <Auth>
        <MainRouter />
      </Auth>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

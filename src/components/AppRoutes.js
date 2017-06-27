// src/components/AppRoutes.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Layout from './Layout';
import routes from '../routes';

export default class AppRoutes extends React.Component {
    render() {
        const browserHistory = createBrowserHistory();
        return (
            <BrowserRouter history={browserHistory}>
                {routes}
            </BrowserRouter>
        );
    }
}

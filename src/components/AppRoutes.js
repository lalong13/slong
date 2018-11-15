// src/components/AppRoutes.js
import React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import routes from '../routes';

export default class AppRoutes extends React.Component {
    render() {
        const browserHistory = createBrowserHistory();
        return (
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
    }
}

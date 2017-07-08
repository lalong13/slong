// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NotFoundPage extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {router} = this.context;

        if (router.staticContext) {
            router.staticContext.statusCode = 404;
        }

        return (
            <div className="not-found">
                <h1>404</h1>
                <h2>Page not found!</h2>
                <div className="w3-center notfound">
                    <div className="stormtrooper">
                        <img src="/img/Not_Found.jpg" />
                    </div>
                </div>
                <p>
                    <Link to="/">Go back to the main page</Link>
                </p>
            </div>
        );
    }
}

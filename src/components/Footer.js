// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-center">
            <footer className="w3-container footer w3-margin">
                <p>
                This app is a universal rendering showcase of routing with <strong><a href="https://facebook.github.io/react" className="standard">React</a></strong>
                , <strong><a href="https://nodejs.org" className="standard">Node</a> with <a href="https://expressjs.com" className="standard">Express</a></strong>,
                and <strong><a href="https://reacttraining.com/react-router" className="standard">React Router</a></strong>. Client-side JavaScript was bundled
                using <strong><a href="https://webpack.js.org" className="standard">Webpack</a></strong>.
                </p>
                <p>
                    All product names, logos, and/or brands are property of their respective owners.
                    All product names used in this website are for identification purposes only.
                    Use of these names, logos, and brands does not imply endorsement.
                    All views expressed are my own and are not paid advertisements or endorsements.

                    Images and text owned by other copyright holders are used here under the guidelines of the Fair Use provisions of United States Copyright Law.
                </p>
                <p>
                This domain was provided to yours truly by <a href="https://freedns.afraid.org" className="standard">Free DNS</a>.<br />
                Find <strong>free</strong> subdomain and cheap domain hosting there.
                </p>
            </footer>
            </div>
        )
    }
}

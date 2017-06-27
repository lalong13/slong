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
            <footer className="w3-container footer">
                <p>
                This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
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

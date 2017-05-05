// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header className="w3-bar w3-large">
                    <button className="w3-bar-item w3-button">
                        <i className="fa fa-bars"/>
                    </button>
            {/*<!--  Logo link goes here -->*/}
                </header>
                <div className="app-content">{this.props.children}
                </div>
                <footer>
                    <p>
                        This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
                    </p>
                </footer>
            </div>
        );
    }
}

// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.animationEnded = this.animationEnded.bind(this);
    }

    handleClick(e) {
        if (this.props.visibility !== "w3-show w3-animate-left") {
            this.props.onVisibilityChange("w3-show w3-animate-left");
        }
    }

    animationEnded(e) {
        if (this.props.visibility === "w3-show w3-animate-alt-left") {
            this.props.onVisibilityChange("w3-hide w3-animate-alt-left");
        }
    }

    render() {
        return (
            <div>
                <div id= "sidebar" className={"w3-sidebar w3-bar-block w3-hide-medium w3-hide-large " + this.props.visibility} onAnimationEnd={this.animationEnded}>
                {/*<!--  Logo link goes here -->*/}
                    <Link to="/software_development" className="w3-bar-item w3-button">
                        Software Development
                    </Link>
                </div>
                <div className="w3-bar w3-large w3-top w3-indigo">
                    <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large" onClick={this.handleClick}>
                        <i className="fa fa-bars"/>
                    </button>
                {/*<!--  Logo link goes here -->*/}
                    <Link to="/software_development" className="w3-bar-item w3-button w3-hide-small">
                        Software Development
                    </Link>
                </div>
            </div>
        );
    }
}

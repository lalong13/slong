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

    //Show sidebar on small screen when menu button is clicked
    handleClick(e) {
        if (this.props.visibility !== "w3-show w3-animate-left") {
            this.props.onVisibilityChange("w3-show w3-animate-left");
        }
    }

    //Hide sidebar when sidebar animation ends (event)
    animationEnded(e) {
        if (this.props.visibility === "w3-show w3-animate-alt-left") {
            this.props.onVisibilityChange("w3-hide w3-animate-alt-left");
        }
    }

    render() {
        return (
            <div className="w3-top">
                <div id= "sidebar" className={"w3-sidebar sidebar w3-light-grey w3-bar-block w3-hide-medium w3-hide-large " + this.props.visibility} onAnimationEnd={this.animationEnded}>
                    <Link to="/software_development" className="w3-bar-item w3-button">
                        <strong>Software Development</strong>
                    </Link>
                </div>
                <div className={"w3-bar w3-large w3-indigo " + this.props.darken}>
                    <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-ripple w3-hover-deep-purple" onClick={this.handleClick}>
                        <i className="fa fa-bars"/>
                    </button>
                    <div className="logo-link">
                    <Link to="/" className="fill w3-bar-item w3-button w3-ripple w3-hover-deep-purple">
                        <img src="/img/logo.png" className="logo"/>
                    </Link>
                    </div>
                    <Link to="/software_development" className="w3-bar-item w3-button w3-hide-small w3-ripple w3-hover-deep-purple">
                        Software Development
                    </Link>
                </div>
            </div>
        );
    }
}

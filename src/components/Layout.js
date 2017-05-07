// src/components/Layout.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidbrVisibility: "w3-hide w3-animate-alt-left"};

        // This binding is necessary to make `this` work in the callback
        this.handleSidbrVisibilityChange = this.handleSidbrVisibilityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.id !== "sidebar") {
            if (this.state.sidbrVisibility === "w3-show w3-animate-left") {
                this.handleSidbrVisibilityChange("w3-show w3-animate-alt-left");
            }
        }
    }

    handleSidbrVisibilityChange(visibility) {
        this.setState({sidbrVisibility: visibility});
    }

    render() {
        return (
            <div className="app-container" onClick={this.handleClick}>
                <Header onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility}/>
                <MainContent onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility}>{this.props.children}
                </MainContent>
                <footer>
                    <p>
                        This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
                    </p>
                </footer>
            </div>
        );
    }
}

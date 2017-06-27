// src/components/Layout.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


// Universal layout
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidbrVisibility: "w3-hide w3-animate-alt-left", darken: ""};

        // This binding is necessary to make `this` work in the callback
        this.handleSidbrVisibilityChange = this.handleSidbrVisibilityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.id !== "sidebar") {
            if (this.state.sidbrVisibility === "w3-show w3-animate-left") {
                this.handleSidbrVisibilityChange("w3-show w3-animate-alt-left");
            }
            if (window.innerWidth > 600) {
                this.handleSidbrVisibilityChange("w3-hide w3-animate-alt-left");
            }
        }
    }

    handleSidbrVisibilityChange(visibility) {
        let darken = (visibility === "w3-show w3-animate-left") ? "darken" : "";
        this.setState({sidbrVisibility: visibility, darken: darken});
    }

    render() {
        return (
            <div className={"app-container w3-light-grey"} onClick={this.handleClick}>
                <Header onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility} darken={this.state.darken}/>
                <div className={"w3-content w3-light-grey content " + this.state.darken}>
                    <MainContent onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility} darken={this.state.darken} />
                    <Footer />
                </div>
            </div>
        );
    }
}

// src/components/Layout.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import MainContainer from './MainContainer';


// Universal layout
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sidbrVisibility: "w3-hide w3-animate-alt-left", darken: "", grey: "w3-light-grey", index: "w3-hide"};
        if (props.location.pathname === "/contact") {
            this.state.grey = "w3-text-light-grey";
        }
        if (props.location.pathname === "/") {
            this.state.index = "w3-show";
        }

        // This binding is necessary to make `this` work in the callback
        this.handleSidbrVisibilityChange = this.handleSidbrVisibilityChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (this.props !== nextProps) {
            if (nextProps.location.pathname === "/contact") {
                this.setState({grey: "w3-text-light-grey"});
            } else {
                this.setState({grey: "w3-light-grey"});
            }
            const title = "Stephen Long";
            const options = {
                '/software_development':" \u2012 S/W Dev",
                '/interests':" \u2012 Personal Interests",
                '/blog':" \u2012 Blog",
                '/contact':" \u2012 Contact Me",
                '/not_found':" \u2012 Page Not Found"
            }
            const path = nextProps.location.pathname;
            if (path === "/"){
                document.title = title;
                this.setState({index: "w3-show"});
            }
            else {
                this.setState({index: "w3-hide"});
                if (options[path]){
                    document.title = title + options[path];
                } else {
                    document.title = title['/not_found'];
                }
            }
            window.scrollTo(0, 0);
        }
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
            <MainContainer handleClick={this.handleClick}>
                <Header onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility} darken={this.state.darken}/>
                <div className={"indexbg " + this.state.index}>
                    <div className={"indexbg slcanvas w3-top slcss"}/>
                    <div className={"w3-display-container w3-top indexbg sl slcss"}>
                        <div className={"w3-content w3-display-container"}>
                            <h1 className={"index-title w3-margin"}>Hello, World!</h1>
                            <h2 className={"w3-center w3-margin"}>My name is Stephen Long</h2>
                            <h2 className={"w3-center w3-margin"}>I am a software engineer living in San Francisco</h2>
                        </div>
                    </div>
                </div>
                <div className={this.state.grey + " w3-content content " + this.state.darken}>
                    <MainContent onVisibilityChange={this.handleSidbrVisibilityChange} visibility={this.state.sidbrVisibility} darken={this.state.darken} setStyle={this.setRouteStyle}/>
                    <Footer />
                </div>
            </MainContainer>
        );
    }
}

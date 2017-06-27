// src/components/NavbarPages.js
import React from 'react';
import { Link } from 'react-router-dom';

//Page Container
export default class NavbarPages extends React.Component {
    constructor(props) {
        super(props);

        // Add navbar links here
        this.state = {
            activeLinks:[
                {text:"S/W Dev",            link:"/software_development"},
                {text:"Personal Interests", link:"/interests"},
                {text:"Blog",               link:"/blog"},
                {text:"Contact Me",         link:"/contact"}
            ]
        }
    }

    render() {
        let statement = this.state.activeLinks.map((page, index) =>
        {
            return <Link to={page.link} key={index} className="w3-bar-item w3-button w3-ripple w3-hover-deep-purple">
                {page.text}
            </Link>;
        }
        );
        return (<div>{ statement }</div>);
    }
}

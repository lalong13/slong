// src/components/Layout.js
import React from 'react';

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"app-content w3-show w3-container"}>{this.props.children}
            </div>
        );
    }
}

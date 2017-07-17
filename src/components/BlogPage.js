// src/components/BlogPage.js
import React from 'react';

export default class BlogPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div>
                    <h1 className="w3-margin">Blog!</h1>
                </div>
                <p className="w3-center">Coming soon!!!</p>
                <div className="w3-center w3-margin">
                    <img className="w3-image" src="/img/under_const.png"/>
                </div>
            </div>
        );
    }
}

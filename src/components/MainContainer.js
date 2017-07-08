// src/components/MainContainer.js
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleClick(e);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={props => ( <div className={"app-container w3-light-grey"} onClick={this.handleClick} style={{backgroundImage: "url(/img/Home.jpg)"}} >{this.props.children}</div> )} />
                <Route exact path="/interests" render={props => ( <div className={"app-container w3-light-grey"} onClick={this.handleClick} style={{backgroundImage: "url(/img/Home.jpg)"}} >{this.props.children}</div> )} />
                <Route render={props => ( <div className={"app-container w3-light-grey"} onClick={this.handleClick} style={{backgroundImage: "url(/img/Space.jpg)"}} >{this.props.children}</div> )} />
            </Switch>
            );
    }
}

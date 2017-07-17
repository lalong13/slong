// src/components/MainContent.js
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import ContactPage from './ContactPage';
import InterestsPage from './InterestsPage';
import SWDevelopmentPage from './SWDevelopmentPage';
import BlogPage from './BlogPage';
import NotFoundPage from './NotFoundPage';

//Page Container
export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"app-content w3-show w3-container"}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                    <Route exact path="/blog" component={BlogPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/software_development" component={SWDevelopmentPage}/>
                    <Route exact path="/interests" component={InterestsPage}/>
                    <Route status={404} component={NotFoundPage}/>
                </Switch>
            </div>
        );
    }
}

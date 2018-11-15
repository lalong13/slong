// src/components/MainContainer.js
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {interests: ''};

        this.handleClick = this.handleClick.bind(this);
        this._getScrollPercent = this._getScrollPercent.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    _getScrollPercent() {
        let h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        let percent = this._getScrollPercent();
        if (percent > 70) {
            this.setState({interests: "starwars"});
        } else if (percent > 30 && percent <= 70) {
            this.setState({interests: "games"});
        } else {
            this.setState({interests: "sports"});
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps !== this.props) {
    //         let percent = this._getScrollPercent();
    //         if (percent > 70) {
    //             this.setState({interests: "starwars"});
    //         } else if (percent > 30 && percent <= 70) {
    //             this.setState({interests: "games"});
    //         } else {
    //             this.setState({interests: "sports"});
    //         }
    //     }
    // }

    handleClick(e) {
        this.props.handleClick(e);
    }

    onScroll() {
        if (this.bg !== null) {
            let percent = this._getScrollPercent();
            if (percent > 70) {
                this.setState({interests: "starwars"});
            } else if (percent > 28 && percent <= 75) {
                this.setState({interests: "games"});
            } else {
                this.setState({interests: "sports"});
            }
        }
    }

    render() {
      // eslint-disable-next-line no-console
      console.log(this.props.location);
        return (
            <Switch>
                <Route exact path="/" render={
                  () =>
                  <div className={"app-container"}>
                    <div className={"background index w3-hide-small w3-hide-medium"} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
                <Route exact path="/contact" render={
                  () =>
                  <div className={"app-container"}>
                    <div className={"background contact"} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
                <Route exact path="/software_development" render={
                  () =>
                  <div className={"app-container"}>
                    <div className={"background swdev w3-hide-small w3-hide-medium"} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
                <Route exact path="/interests" render={
                  () =>
                  <div ref={el => this.bg = el} className={"app-container"}>
                    <div className={"background w3-hide-small w3-hide-medium " + this.state.interests} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
                <Route exact path="/blog" render={
                  () =>
                  <div className={"app-container"}>
                    <div className={"background blog w3-hide-small w3-hide-medium"} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
                <Route render={
                  () =>
                  <div className={"app-container"}>
                    <div className={"background notfound w3-hide-small w3-hide-medium"} />
                    <div className={"w3-display-container"} onClick={this.handleClick}>{this.props.children}</div>
                  </div>
                } />
            </Switch>
            );
    }
}

// src/components/ContactPage.js
import React from 'react';

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div>
                    <h1 className="w3-center">Please Contact Me</h1>
                    <h4 className="w3-center">Feel free to email me or contact me on Github<br />Mention the site in the Subject line of the email to get a response</h4>
                </div>
                <div className="w3-block w3-center">
                    <a className="gmail" href="mailto:real.lalong13@gmail.com?Subject=StephenLong%20Jedimasters"><img className="w3-center gmail-img" src="/img/New_Logo_Gmail.svg" /></a>
                    <a href="https://github.com/lalong13/slong" className="fa fa-icon fa-github"/>
                </div>
            </div>
        );
    }
}

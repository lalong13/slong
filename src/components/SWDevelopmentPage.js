// src/components/SWDevelopmentPage.js
import React from 'react';

export default class SWDevelopmentPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <div className="w3-margin">
                    <h1 className="w3-center">Software Development</h1>
                    <h3>Node JS</h3>
                    <div>
                        <a href="https://nodejs.org" className="standard"><img src="/img/nodejs-new-small-pantone-black.png" className="w3-margin w3-image w3-right" /></a>
                        <div>
                            <p>Starting this off with Node, Node JS makes developing web apps and web sites so much easier. One only needs to only learn JavaScript to
                            get something built and up and running.</p>
                            <p>As JavaScript is practically necessary on the client-side today, it is convenient to be able to power a web server with JS code and not
                            have to learn a different language for the client-side. This site was built with Node as I really like JavaScript.</p>
                        </div>
                    </div>
                    <h3>Java</h3>
                    <div>
                        <a href="https://www.java.com" className="standard w3-right"><img src="/img/java.png" className="w3-image" /></a>
                        <div>
                            <p>Java is a very powerful language that is highly versatile. Many web sites still use Java on their web servers as it is very powerful,
                            scalable, platform independent and well documented.</p>
                            <p>I personally don't like Java that much as it is highly verbose and is very complicated to get many little things done. I understand it
                            has its place and I have coded in Java, it is just one of my lesser preferred languages</p>
                        </div>
                    </div>
                    <h3>C/C++</h3>
                    <div>
                        <a href="http://www.cprogramming.com" className="standard w3-right"><img src="/img/cpp.png" className="w3-image" /></a>
                        <div>
                            <p>I, not so secretly anymore, really love C. I haven't coded in it in years however as its downsides have seem to regulate it mostly to the
                            Recycle Bin (or Trash). I like its speed and open nature except when receiving the hated segmentation fault. It also needed a lot of code to
                            do many of the basic things that we write code to accomplish. I haven't used C++ as much as C but with C#, Objective-C and Java, the need for
                            C and C++ isn't anywhere near what it used to be.</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://www.perl.org" className="standard w3-right"><img src="/img/perl-logo.png" className="w3-image" /></a>
                        <div>
                            <h3>Perl</h3>
                            <p>Let's not talk about it... Seriously though, Perl is a great scripting language especially for all things regular expressions. It has some
                            serious quirks and is ugly for object-oriented code, but if you are looking to modify text files for logging purposes, you have probably found
                            the right language.</p>
                        </div>
                    </div>
                    <h3>PHP</h3>
                    <div>
                        <a href="https://secure.php.net" className="standard w3-right"><img src="/img/php.png" className="w3-image" /></a>
                        <div>
                            <p>Although it looks a lot like Perl, it is better is almost everyway, especially if you aren't trying to modify text files. It is fairly slow
                            running and doesn't scale all that well on its own. (Facebook developed a virtually machine for PHP. They have since moved away from base PHP).
                            It handles Object Oriented code very well, is highly flexible</p>
                        </div>
                    </div>
                    <h3>Git and Github</h3>
                    <div>
                        <a href="https://git-scm.com" className="standard w3-margin-left w3-margin-right w3-left"><img src="/img/Git-Logo-2Color.png" className="w3-image" /></a>
                        <div>
                            <p>Git is pretty much the de facto source control management system for software engineers. If you are not familiar
                            with Git and want to be a software engineer, I highly suggest that you get familiar with it.</p>
                        </div>
                    </div>
                    <div>
                        <a href="https://github.com" className="standard w3-right"><img src="/img/GitHub_Logo.png" className="w3-image" /></a>
                        <div>
                            <p>
                                Although there are other sites for storing Git repositories Github is likely the most well known and most popular site for storing Git repos. It
                                offers many features such as code integration checks, webhooks, and other collaberative features for things like code reviews. I propose using
                                this <a href="https://www.atlassian.com/git/tutorials/comparing-workflows" className="standard">resource</a> to help getting started.
                            </p>
                        </div>
                    </div>
                    <h3>JavaScript</h3>
                    <div className="w3-display-container flexbox-large flexbox-med">
                        <div className="shrinkwrap flexdivright w3-right">
                            <a href="https://www.javascript.com" className="standard"><img src="/img/javascriptcom.jpg" className="w3-image-alt w3-right w3-margin-left" /></a>
                        </div>
                        <div>
                            <p>
                                JavaScript is basically the language of the web. Disable JavaScript in your browser and experience the web of yesteryear. JavaScript has
                                grown into a highly capable, very powerful language that as mentioned in the Node JS section is capable of being used on the Server as well as
                                on the client machine. It is very flexible like C and not too verbose, but very well-documented with resources such
                                as <a href="https://developer.mozilla.org/en-US/" className="standard">MDN</a> and <a href="https://www.w3schools.com" className="standard">w3schools.com</a>.
                            </p>
                        </div>
                    </div>
                    <h3>React/Angular</h3>
                    <div className="w3-display-container">
                        <a href="https://angular.io" className="standard w3-margin-left w3-margin-right w3-left"><img src="/img/angular.png" className="w3-image" /></a>
                        <div className="react-space-large react-space-small" />
                        <div className="bottom-right">
                            <a href="https://facebook.github.io/react" className="standard w3-margin-left w3-margin-right bottom-right"><img src="/img/react_logo_og.png" className="w3-image" /></a>
                        </div>
                        <p>I can't really speak to Angular too much yet, as that will probably be a future project. I can speak to React and the framework/libraries that
                        allow developers to go faster developing modern websites that are both beautiful and intuitive. I have found myself really enjoyig using React as
                        it is very fast getting pages built and also intuitive to use with a low learning curve. They are both generally greatly supported by developers at both
                        the originators (Facebook and Google for React and Angular respectively) and the open-source community. Although there are other frameworks, such as
                        Ember and Backbone, these two are the most popular. That being said there is a break between Angular 1 and Angular 2-4, but most shops are either adopting
                        or migrating to Angular 4.</p>
                    </div>
                    <h3>Ruby/Rails</h3>
                    <div>
                        <a href="http://rubyonrails.org" className="standard w3-right"><img src="/img/rubyonrailswebapplicatondevelopment.png" className="w3-image" /></a>
                        <div>
                            <p>Ruby is a very interesting language that with Rails can allow a developer to build a website very quickly. I'm not sure if it will maintain it's
                            popularity going forward given many of the other languages above and their space in web development.</p>
                        </div>
                    </div>
                    <h3>Python</h3>
                    <div>
                        <a href="https://www.python.org" className="standard w3-left w3-margin-left w3-margin-right"><img src="/img/Python-logo-notext.svg.png" className="w3-image" /></a>
                        <div>
                            <p>Python is a language that is very similar to Perl in utility, but probably better in every way except for regular expressions. I'm not well-versed
                            in the differences between Python2 and Python3 at this point, but both versions of Python has simpler syntax than Perl with way more support in 2017.
                            It can be used to power a webserver, do file processing, build OS applications, AI, and much more.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

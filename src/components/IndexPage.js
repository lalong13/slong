// src/components/IndexPage.js
import React from 'react';

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <div>
                    <div className="w3-margin w3-padding-16">
                        <h2>A little bit about me</h2>
                        <p>I am a Georgia Tech grad living in San Francisco, CA. Having lived in a variety of places, I have a very unique view on the world that I would love to
                        share with you!</p>

                        <div className={"florida w3-margin w3-right"}>
                        <img className={"w3-image"} src="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_332,q_75,w_495/v1/clients/pensacola/website_where_is_pcola_map_800_71e6c8f2-3443-4288-a884-66fe03ae5bec.png"/>
                        </div>
                        <p>I was born in Pensacola, Fla., a small town where it was regurlarly hot and rainy with plenty of mosquitoes. There was also beautiful beaches and friendly
                        people. I have carried that friendly nature with me to this day. I moved to Texas at a young age where I developed into a humor-loving person who always
                        appreciates a good joke. I am somewhat of a nerd being into comic books, playing video and board games, and all things technology. I greatly appreciate
                        all things history related to cultures all around the world and many things others may find mundane such as politics, but I also appreciate activities
                        like playing and watching sports, going to beaches, and snowboarding.</p>
                        <p>Since graduating from Georgia Tech in Atlanta (Go Jackets!!!), I have made my home in the San Francisco Bay Area. From data analysis to full-stack
                        engineering, I am a versatile engineer with varied interests.</p>
                        <h2>The Skinny</h2>
                        <p>{"I made this website mostly as an exercise for myself. It's been a great a learning experience and a lot of fun. Check my blog once I get it going " +
                           "for updates."}</p>
                    </div>
                </div>
            </div>
        );
    }
}

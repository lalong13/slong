// src/components/InterestsPage.js
import React from 'react';

export default class InterestsPage extends React.Component {
    render() {
        return (
            <div className="home">
                <h1 className="w3-center">My Personal Interests</h1>
                <h4 className="w3-center">I wanted to share a few of my personal<br/>interests when I am not busy writing code</h4>
                <h2>Sports</h2>
                <img className="w3-image w3-right" src="/img/los_angeles_lakers.png"/>
                <h3 className="small-heading">NBA &#8210; Lakers</h3>
                    <p>I have a long-standing love for basketball. I don’t play as much as I used to, but I still watch the sport played at its highest level in the NBA. My favorite team, the Los Angeles Lakers, also happen to be the best team as far as most playoff appearances (60), most NBA Finals appearances (31), 2nd most hall of famers (23), 2nd most championships (16), and 2nd most regular season MVPs (8). They won their last championship in 2010 and haven’t been to the playoffs since 2013, but with youthful talent, quality coaching and management it shouldn’t be too long before we return. (<em>All numbers as of 7/2017</em>)</p>
                    <p>I have to give a shout-out to Stephen Curry. Get traded to the Lakers and bring us back to glory! (A man can dream…)</p>
                <h3>Georgia Tech College Football</h3>
                    <img className="w3-image w3-left" src="/img/georgia-tech-yellow-jackets.png"/>
                    <p>I grew to like football over the years as a kid. I never really played much except out in the street in the neighborhood. Watching it on TV and playing the game in video games was usually pretty exciting. It was not until I went to college that I got the thrill of seeing football played at a high level in person (high school doesn’t count). While at Georgia Tech I got to see Calvin Johnson, Demaryius Thomas, Morgan Burnett and whole host of other great Tech players don the white and old gold. I also got to see players such as Matt Ryan, Matt Stafford, A.J. Green and C.J. Spiller line up against us. The passion from the fans seen in a college game is great experience and their isn’t much that rivals cheering for your alma mater.</p>
                    <p><em>TO HELL WITH GEORGIA!!!</em></p>
                <h2>Video Games</h2>
                <div className="w3-margin w3-right w3-center">
                    <img className="w3-image" src="/img/xbox.jpg"/>
                </div>
                <h3>XBox</h3>
                    <p>I’m not much into PC gaming these days as I spend the majority of my time gaming on my XBox. It wasn’t long after the Dreamcast died off that I was seriously considering getting a Playstation 2. I had the opportunity to play <a href="https://en.wikipedia.org/wiki/Halo:_Combat_Evolved" className="standard">Halo: Combat Evolved</a> in a store with my brother and I was instantly sold. I mainly play shooters these days such as Halo, Gears of War, Bioshock, and so forth, but there was a time when I played more. I still play Assassin’s Creed, Forza and some other games as well and if you want to challenge me, my gamertag is <a href="https://account.xbox.com/en-US/Profile?gamerTag=LALong13" className="standard">LALong13</a>. That’s pronounced L-A-Long-13.</p>
                <h3>Old School gaming</h3>
                <img className="w3-left w3-center w3-image sonic" src="/img/sonic05_32.png"/>
                <img className="w3-image w3-center w3-right mario" src="/img/mario.jpg"/>
                    <p>In my younger years I played many games going all the way back to the Atari. Platformers (Mario Bros., Sonic), Fighters (Street Fighter, Mortal Kombat), Arcade sports games (NBA JAM, NFL Blitz), racers (Gran Turismo), shooters (Doom, Duke Nukem), and adventure games (Zelda, Metroid), I played them all. I was (and still am) very competitive and loved to win. I still like to enjoy some of the classic games every now and then.</p>
                <h2>Electronics</h2>
                    <p>I'm into TVs, computers, cell phones, sound systems, etc. If it runs off of electricity I'm probably into it. Right now I have an eye out for one of those 4K OLED TVs LG makes, and I cannot wait until the Google Pixel XL 2 comes out.</p>
                <h2>Travel</h2>
                    <p>I love to travel and see different places. So far I have mostly been around the US, but I have been to Canada and Mexico along with a trip to Beijing and the Great Wall of China. I still have not been to Boston, Miami, or Chicago, but I would also love to visit other nations in Europe, Asia, Africa, and South America.</p>
                <h2>Movies</h2>
                    <p>I wouldn't call myself a movie buff but I am really into Comic Book movies (DC Comics movies make me sad) and in case you haven't guessed yet, Star Wars. I will leave you with a little video that kept me company on the main page while developing this site. Enjoy!!</p>
                <div className="youtubevideowrap">
                    <div className="video-container">
                        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/y2-8TtMbQcQ" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

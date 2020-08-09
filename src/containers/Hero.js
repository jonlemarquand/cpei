import React from 'react';

import HeroNav from '../components/HeroNav/HeroNav';

import './Hero.scss';

const Hero = () => {
    return (
    <div className="hero">
        <h1>Corporate Political Engagement Index 2018</h1>
        <div className="intro-section">
            <div className="youtube-video">
            <iframe width="400" height="225" src="https://www.youtube.com/embed/743xPkJeWBo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="intro-text">
                <p>Corporate political engagement is how the business sector interacts with Governments. It’s a legitimate activity. It helps Governments to design policies that help companies to thrive and regulations that protect the public interest.</p>
                <p>But when done in the shadows it can be a serious corruption risk where decisions are made in the interest of the rich and powerful.</p>
                <p>Corruption can undermine people's trust in democracy, the economy, institutions and leaders.  The Corporate Political Engagement Index supports companies and the wider private sector to raise standards of political engagement. The index provides companies with an understanding of the respective strengths and weaknesses of their current approach to political engagement.</p>
            </div>
        </div>
        <HeroNav />
    </div>
    )
}

export default Hero;
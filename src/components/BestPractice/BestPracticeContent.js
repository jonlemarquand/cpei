import React from 'react';

const BestPracticeContent = ({ bestPractice, children, title, imgLink }) => {
    return (
        <div className="bp-content">
            <div className="bp-column-text">
                <h3>{ title }</h3>
                { children }
                <a href="http://test.com" className="bp-read-more">Read More</a>
            </div>
            <div className="bp-column-img">
                <img src={imgLink} alt="40 percent of businesses ranked a to c"/>
            </div>
        </div>
    )
}

export default BestPracticeContent;
import  React,  { useState, useEffect } from 'react';

import './BestPractice.scss';

const BestPractice = () => {

    const [bestPractice, setBestPractice] = useState('control');

    const BestPracticeContent = () => {
        if (bestPractice === 'control') {
            return (
                <div className="bp-content">
                    <div className="bp-column-text">
                        <h3>Control Environment</h3>
                        <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                        <p><strong>Best Practice:</strong></p>
                        <ul>
                            <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                            <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                            <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                            <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                        </ul>
                        <button className="bp-read-more">Read More</button>
                    </div>
                </div>
            )
        }
        return 'Test'
    }
    return (
        <div id="best-practice">
            <h2>Best Practice</h2>
            <div className="bp-section">
                <div className="bp-options">
                    <ul>
                        <li className="active-li">Control Environment</li>
                        <li>Political Contributions</li>
                        <li>Responsible Lobbying</li>
                        <li>Revolving Door</li>
                        <li>Transparency</li>
                    </ul>
                </div>
                    <BestPracticeContent />
            </div>
        </div>
    )
}

export default BestPractice;
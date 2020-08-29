import  React,  { useState, useEffect } from 'react';

import BestPracticeContent from '../components/BestPractice/BestPracticeContent';

import './BestPractice.scss';
import ControlEnvironmentImg from '../assets/controlenvironmentnew-p-500.png';
import PoliticalContributionsImg from '../assets/politicalcontributions.png';
import ResponsibleLobbyingImg from '../assets/lobbying2-p-500.png';
import RevolvingDoorImg from '../assets/revolving-door.png';
import TransparencyImg from '../assets/transparency.png';


const BestPractice = () => {

    const [bestPractice, setBestPractice] = useState('control');

    const bestPracticeHandler = (e) => {
        setBestPractice(e.target.getAttribute("data-value"))
    }
    const BestPracticeOptions = [
        {"name": "Control Environment", "slug": "control"},
        {"name": "Political Contributions", "slug": "political"},
        {"name": "Responsible Lobbying", "slug": "responsible"},
        {"name": "Revolving Door", "slug": "revolving"},
        {"name": "Transparency", "slug": "transparency"},
    ];

    const BestPracticeOptionsDisplay = BestPracticeOptions.map(option => {
        if (bestPractice === option.slug) {
            return <li data-value={option.slug} onClick={bestPracticeHandler}className="active-li">{option.name}</li>
        } else {
            return <li data-value={option.slug} onClick={bestPracticeHandler}>{option.name}</li>
        }
    })
    const BestPracticeContentDisplay = () => {
        if (bestPractice === 'control') {
            return (    
                <BestPracticeContent bestPractice={bestPractice} title="Control Environment" imgLink={ ControlEnvironmentImg }>
                    <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                        <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                        <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                        <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                    </ul>
                </BestPracticeContent>
            )
        } else if (bestPractice === 'political') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Political Contributions" imgLink={ PoliticalContributionsImg }>
                    <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                        <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                        <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                        <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                    </ul>
                </BestPracticeContent>
            )
        } else if (bestPractice === 'responsible') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Responsible Lobbying" imgLink={ ResponsibleLobbyingImg }>
                    <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                        <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                        <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                        <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                    </ul>
                </BestPracticeContent>
            )
        }  else if (bestPractice === 'revolving') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Revolving Door" imgLink={ RevolvingDoorImg }>
                    <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                        <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                        <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                        <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                    </ul>
                </BestPracticeContent>
            )
        }  else if (bestPractice === 'transparency') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Transparency" imgLink={ TransparencyImg }>
                    <p>The control environment concerns the corporate culture, values, operational style and organisational structures that underpin a company’s approach to political engagement. Having the right structures in place enables companies to spot - and stop – political corruption.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Commit to values-driven political engagement –focused on integrity, ethical behaviour and transparency</li>
                        <li>Have a legitimate voice – ensure politician engagement focuses on meeting business objectives</li>
                        <li>Ensure accountability - make sure responsibility for political engagement rest in the boardroom</li>
                        <li>Be consistent – implement group-wide, global approaches to political engagement</li>
                    </ul>
                </BestPracticeContent>
            )
        }
    }


    return (
        <div id="best-practice">
            <h2>Best Practice</h2>
            <div className="bp-section">
                <div className="bp-options">
                    <ul>
                        { BestPracticeOptionsDisplay }
                    </ul>
                </div>
                    <BestPracticeContentDisplay />
            </div>
        </div>
    )
}

export default BestPractice;
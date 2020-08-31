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
                     <p>Political contributions can range from money and gifts in-kind for a political party or politician, to loans, free or discounted services, property, sponsorship of events and the use of facilities at less than market value. Making political contributions, particularly in secret, is often associated with improper behaviour.</p>
                     <p><strong>Best Practice:</strong></p>
                     <ul>
                        <li>Have a policy not to make political contributions – either directly or indirectly.</li>
                        <li>If contributions are made, ensure that:</li>
                        <li>They are made in exceptional circumstances and only to support a genuine democratic process</li>
                        <li>They do not disproportionately advantage any party or political viewpoint</li>
                        <li>Payments are made public, whether or not it is a legal requirement</li>
                    </ul>
                </BestPracticeContent>
            )
        } else if (bestPractice === 'responsible') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Responsible Lobbying" imgLink={ ResponsibleLobbyingImg }>
                    <p>Lobbying is any direct or indirect communication with political decision-makers for the purpose of influencing laws, regulations and government plans. It can also include attempts to influence public opinion, outside of normal advertising and marketing activity, with a view to impacting the views if politicians and government officials.</p>
                    <p>When carried out responsibly, lobbying is a legitimate and beneficial activity, although it should never undermine people's trust in democracy, the economy, institutions and leaders.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>A publicly available lobbying policy – be open about what the company is lobbing to change</li>
                        <li>Monitor lobbyists – ensure lobbyist and membership organisations adhere to the company’s values and code-of-conduct</li>
                        <li>Demonstrate transparency – reveal when a serving politician is hired and how much is spent on lobbying activities</li>
                    </ul>
                </BestPracticeContent>
            )
        }  else if (bestPractice === 'revolving') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Revolving Door" imgLink={ RevolvingDoorImg }>
                    <p>The revolving door involves the movement of individuals between positions of public office and jobs in the private sector, in either direction. This includes hiring public officials, seconding staff to the public sector, receiving secondees from the public sector and contact with former staff now in public office.</p>
                    <p>The revolving door poses risks of conflicts of interest, trading in influence, bribery, reputational damage and public mistrust.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Design policies and procedures for the revolving door – going beyond compliance with laws governing the post-public employment of public officials.</li>
                        <li>Cover both the hiring of former politicians and public officials and the movement of former employees to public sector positions</li>
                        <li>Publish details of secondments to and from the public sector – revealing the number, location and purpose of secondments</li>
                    </ul>
                </BestPracticeContent>
            )
        }  else if (bestPractice === 'transparency') {
            return (
                <BestPracticeContent bestPractice={bestPractice} title="Transparency" imgLink={ TransparencyImg }>
                    <p>Public reporting is one of the most important ways in which companies demonstrate their commitment to responsible political engagement.</p>
                    <p>Information about corporate political activities is often difficult to find, making it hard for stakeholders - investors, customers and employees -  to understand a company’s public policy position, how much they invests in lobbying and if the company is working ethnically.</p>
                    <p><strong>Best Practice:</strong></p>
                    <ul>
                        <li>Fully report political engagement – from guiding principles, objectives and lobbying interests to activities, contributions and expenditures</li>
                        <li>Ensure accessibility– consolidate information for stakeholders in a dedicated web page or report</li>
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
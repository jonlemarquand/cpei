import  React,  { useState, useEffect } from 'react';

import InfoBox from '../components/InfoBox/InfoBox';

import './Faqs.scss';

const Faqs = () => {

    return (
        <div id="faqs">
            <h2>FAQs</h2>
            <div className="faqs-section">
                <InfoBox headerText="What is the purpose of the index?">
                    <p>The index is designed to raise standards of corporate political engagement worldwide. It seeks to do this by assessing the policies, procedures and practice of international companies against TI-UK’s guidance on responsible political engagement. Results are consolidated and rated within an index, enabling comparison of companies by boards of directors, investors, analysts and other stakeholders, providing them with a tool to raise standards and prevent corruption.</p>
                </InfoBox>
                <InfoBox headerText="Why have you included companies on the Strategic Relationship Management Programme for 2018?">
                    <p>This is because of the additional access to UK Ministers and Departments that members of the Strategic Relationship Management Programme benefit from. We believe it is important that companies in this position, regardless of turnover, engage in responsible political engagement and are transparent about the activities they undertake. It is our view that it is an important component of public and investor trust in companies doing business in the UK.</p>
                </InfoBox>
                <InfoBox headerText="What is the methodology?">
                    <p>Our assessment of a company’s individual record on political engagement was based entirely on the information made available to the public by that company.  In particular, we reviewed company websites, including downloadable reports for evidence of reporting on political engagement as well as any functioning hyperlinks to other materials companies include on their website. In reviewing your company’s materials, we will assess the completeness and accessibility of the information, in particular:</p>
                    <ul>
                        <li>The amount of information a company publishes about their overall approach to political engagement.</li>
                        <li>The issues and topicsof material interest to them and to their stakeholders.</li>
                        <li>The specific activities they undertake.</li>
                        <li>Key expenditures figures.</li>
                    </ul>
                    <p>Once we assessed companies we notified them of our preliminary findings and provided them with a right-to-reply period to bring any corrections or additional supporting material to our attention.</p>
                    <p>A copy of our question set for compiling the index is available in the 2018 Corporate Political Engagement Index.</p>
                </InfoBox>
                <InfoBox headerText="How are the companies rated?">
                    <p>Companies are placed into one of six bands, from A to F, based on their scores. The bands reflect the extent of public evidence and the completeness of policies and procedures for political activities.</p>
                    <ul>
                        <li><strong>A</strong> - The company demonstrates excellent standards. Continuous monitoring and review is recommended to ensure standards remain high.</li>
                        <li><strong>B</strong> - The company demonstrates good standards. Continuous monitoring and review is recommended and there is scope to implement some improvements.</li>
                        <li><strong>C</strong> - The company demonstrates fair standards. Continuous monitoring and review is recommended and there is scope to implement a number of improvements.</li>
                        <li><strong>D</strong> - The company demonstrates fairly poor standards. Review is recommended and there is scope to implement improvements across most areas.</li>
                        <li><strong>E</strong> - The company demonstrates poor standards. Review is recommended and there is scope to implement improvements across the majority of area.</li>
                        <li><strong>F</strong> - The company demonstrates very poor standards. Prompt review is recommended and there is scope to implement multiple improvements across all areas.</li>
                    </ul>
                </InfoBox>
                <InfoBox headerText="Did the index assess internal and external evidence?">
                    <p>No, the index only assessed evidence from publicly available sources. We deem transparent publication of information relating to political activities to be highly important, as it increases customer and investor confidence in the company and the political process, ensures the details of companies’ involvement in the political process is open to public scrutiny and enables companies to share and understand best practice.</p>
                </InfoBox>
                <InfoBox headerText="How are the results used?">
                    <p>We are publishing the results so that they are available to relevant stakeholders. We envisage that the results will encourage companies to review their own practices. Within industry these results demonstrate which companies are industry leaders in ethical corporate political engagement. Both between and within industries we hope these results will begin a conversation on different approaches taken to managing this arena.  For interested investors and stakeholders this index demonstrates which companies are responsibly engaging with politics, taking more long-term views about their growth and acting with transparency about their methods of working.</p>
                </InfoBox>
                <InfoBox headerText="I don't agree with the results for my company">
                    <p>While we are no longer able to accept further evidence from companies for this iteration of the Index, we plan to run this Index again and encourage companies to work with us on gathering evidence. Please do contact us here so we can note your contact details for the next iteration.</p> 
                    <p>If you feel we have assessed your company wrongly or missed out a key piece of information, please contact us.</p>
                </InfoBox>
                <InfoBox headerText="Can I assess my company using this questionnaire?">
                    <p>Yes we have developed a self-assessment tool which allows your company to assess the strength of its policies and procedures relating to corporate political engagement.</p>
                </InfoBox>
                <InfoBox headerText="I would like advice on how my company can improve our policies and procedures relating to political engagement">
                    <p>Please see our guidance document Wise Counsel or Dark Arts? Principles and Guidance for Responsible Corporate Political Engagement.</p>
                </InfoBox>
            </div>
        </div>
    )
}

export default Faqs;
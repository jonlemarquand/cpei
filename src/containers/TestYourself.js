import  React,  { useState, useEffect } from 'react';

import './TestYourself.scss';

const TestYourself = () => {

    return (
        <div id="test">
            <h2>Take the Test</h2>
            <div className="test-section">
            <iframe src="https://www.surveygizmo.com/s3/4662634/CPEI-Self-Assessment" frameborder="0" width="1140px" height="600"></iframe>
            </div>
        </div>
    )
}

export default TestYourself;
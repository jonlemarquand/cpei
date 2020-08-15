import React from 'react';

import './Publication.scss';

const Publication = ({ imageSrc, url}) => {
    return (
        <div className="publication">
            <img src={process.env.PUBLIC_URL + imageSrc} className="pub-img" />
            <a className="pub-btn" href={process.env.PUBLIC_URL + url}>Download PDF</a>
        </div>
    )
}

export default Publication;
import React from 'react';

import './NavCircle.scss';

const NavCircle = ({ name, url}) => {
    return(
        <a className="navCircle" href={url}>{name}</a>
    )
}

export default NavCircle;
import React from 'react';

import NavCircle from '../Shared/NavCircle';

import './HeroNav.scss';

const HeroNav = () => {
    return (
        <div className="heroNav">
            <NavCircle name="Results" url="#results" />
            <NavCircle name="Best Practice" url="#results" />
            <NavCircle name="Test Yourself" url="#results" />
            <NavCircle name="FAQs" url="#results" />
            <NavCircle name="Resources" url="#results" />
        </div>
    )
}

export default HeroNav;
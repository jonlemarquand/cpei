import React from 'react';

import NavCircle from '../Shared/NavCircle';

import './HeroNav.scss';

const HeroNav = () => {
    return (
        <div className="heroNav">
            <NavCircle name="Results" url="#results" />
            <NavCircle name="Best Practice" url="#best-practice" />
            <NavCircle name="Test Yourself" url="#test" />
            <NavCircle name="FAQs" url="#faqs" />
            <NavCircle name="Resources" url="#resources" />
        </div>
    )
}

export default HeroNav;
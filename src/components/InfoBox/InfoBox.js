import React, { useState } from 'react';
import {CSSTransition} from 'react-transition-group';

import './InfoBox.scss';

const InfoBox = ({ headerText, children, decoBox }) => {

    const [isOpen, setIsOpen] = useState(false);

    const IsOpenHandler = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    let activeHeader = 'infobox-header';
    let crossOpen = 'crossOpen';
    let contentClasses = 'infobox-content';
    let ActiveContent;

    if (isOpen) {
        activeHeader += ' active';
        crossOpen += ' active';
    }
    if (decoBox) {
        contentClasses += ' decoBox';
    }

    ActiveContent = (
        <CSSTransition
            in={isOpen}
            timeout={200}
            classNames="infobox-display"
            unmountOnExit
        >
            <div className={ contentClasses }>
                { children }
            </div>
        </CSSTransition>
    )

    return (
        <div className="infobox">
            <div onClick={ IsOpenHandler } className={ activeHeader }>
                <h3>{ headerText }</h3>
                <div className={ crossOpen }>&#43;</div>
            </div>
            { ActiveContent }
        </div>
    )
}

export default InfoBox;
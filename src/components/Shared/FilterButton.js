import React from 'react';

import './FilterButton.scss';

const FilterButton = ({ name, value, active, onCategoryChange }) => {
    return(
        <button 
            data-value={value} 
            className={`filterButton ${active}`} 
            onClick={
                (e) => {onCategoryChange(e.target.getAttribute('data-value'))}
            }
        >
            {name}
        </button>
    )
}

export default FilterButton;
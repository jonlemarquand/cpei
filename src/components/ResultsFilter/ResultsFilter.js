import React from 'react';

import FilterButton from '../../components/Shared/FilterButton';

import './ResultsFilter.scss';

const ResultsFilter = ({ theme, industry, onThemeChange, onIndustryChange }) => {
    const ThemesList = [
        {name: "Overall", value: "overall"},
        {name: "Control Environment", value: "control"},
        {name: "Political Contributions", value: "political"},
        {name: "Responsible Lobbying", value: "responsible"},
        {name: "Revolving Door", value: "revolving"},
        {name: "Transparency", value: "transparency"}
    ]

    const IndustriesList = [
        {name: "All", value: "all"},
        {name:"Accounting and Consultancy", value:"accounting"},
        {name:"Automotive", value: "automotive"},
        {name:"Banking and Financial Services", value: "banking"},
        {name:"Consumer Products", value:"consumer"},
        {name:"Economic Goods", value: "economic"},
        {name:"Energy and Utilities", value: "energy"},
        {name:"Engineering and Manufacturing", value: "engineering"},
        {name:"Multi-Industry", value: "multi"},
        {name:"Pharmaceutical", value: "pharma"},
        {name:"Technology, Software and Business Services", value: "tech"},
        {name:"Telecommunication and Media", value: "telecomms"}
    ]

    const FilterThemes = ThemesList.map(item => {
        if (theme === item.value) {
            return <FilterButton name={item.name} value={item.value} onCategoryChange={onThemeChange} active="active-filter"/>
        } else {
            return <FilterButton name={item.name} value={item.value} onCategoryChange={onThemeChange}
            active=""/>
        }
    })

    const FilterIndustries = IndustriesList.map(item => {
        if (industry === item.value) {
            return <FilterButton name={item.name} value={item.value} onCategoryChange={onIndustryChange} active="active-filter"/>
        } else {
            return <FilterButton name={item.name} value={item.value} onCategoryChange={onIndustryChange}
            active=""/>
        }
    })

    return (
        <div>
            <h3>Filter By Theme</h3>
            <div className="filter-list">
                { FilterThemes }
            </div>
            <h3>Filter By Industry</h3>
            <div className="filter-list">
                { FilterIndustries }
            </div>
        </div>
    )
}

export default ResultsFilter
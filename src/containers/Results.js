import  React,  { useState, useEffect } from 'react';

import ResultsFilter from '../components/ResultsFilter/ResultsFilter';
import ResultsTable from '../components/ResultsTable/ResultsTable';

import './Results.scss';

const Results = () => {

    const [theme, setTheme] = useState('overall');
    const [industry, setIndustry] = useState('all');

    const onThemeChange = (value) => {
        setTheme(value)
    }
    const onIndustryChange = (value) => {
        setIndustry(value)
    }

    return (
        <div id="results">
            <h2>Results</h2>
            <div className="results-section">
            <ResultsFilter
                theme={theme}
                onThemeChange={onThemeChange}
                industry={industry}
                onIndustryChange={onIndustryChange}
            />
            <ResultsTable />
            </div>
        </div>
    )
}

export default Results;
import  React,  { useState, useEffect } from 'react';

import ResultsFilter from '../components/ResultsFilter/ResultsFilter';
import ResultsTable from '../components/ResultsTable/ResultsTable';

import cpeiData from '../data/cpeiData';

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

    const AScores = cpeiData.map(company => {
        if (company.[theme] === "A" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

    const BScores = cpeiData.map(company => {
        if (company.[theme] === "B" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

    const CScores = cpeiData.map(company => {
        if (company.[theme] === "C" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

    const DScores = cpeiData.map(company => {
        if (company.[theme] === "D" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

    const EScores = cpeiData.map(company => {
        if (company.[theme] === "E" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

    const FScores = cpeiData.map(company => {
        if (company.[theme] === "F" && (industry === 'all' || industry === company.industry)) {
            return <div className="company">{company.display}</div>
        }
        return null;
    })

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
            <ResultsTable 
                AScores={AScores}
                BScores={BScores} 
                CScores={CScores} 
                DScores={DScores} 
                EScores={EScores} 
                FScores={FScores} 
 
            />
            </div>
        </div>
    )
}

export default Results;
import React from 'react';

import './ResultsTable.scss';

const ResultsTable = ( { AScores, BScores, CScores, DScores, EScores, FScores } ) => {
    return (
        <div className="results-table">
            <div className="results-A">
                <div className="results-letter">A</div>
                <div className="results-container">
                    <div className="results-list">{ AScores }</div>
                </div>
            </div>
            <div className="results-B">
                <div className="results-letter">B</div>
                <div className="results-container">
                    <div className="results-list">{ BScores }</div>
                </div>
            </div>
            <div className="results-C">
                <div className="results-letter">C</div>
                <div className="results-container">
                    <div className="results-list">{ CScores }</div>
                </div>
            </div>
            <div className="results-D">
                <div className="results-letter">D</div>
                <div className="results-container">
                    <div className="results-list">{ DScores }</div>
                </div>
            </div>
            <div className="results-E">
                <div className="results-letter">E</div>
                <div className="results-container">
                    <div className="results-list">{ EScores }</div>
                </div>
            </div>
            <div className="results-F">
                <div className="results-letter">F</div>
                <div className="results-container">
                    <div className="results-list">{ FScores }</div>
                </div>
            </div>
        </div>
    )
}

export default ResultsTable
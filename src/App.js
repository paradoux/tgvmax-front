//React imports
import React from 'react'

//Component imports
import SearchContainer from './searchbar/SearchContainer'
import ResultsContainer from './results/ResultsContainer'

//Style imports
import './App.css'

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <SearchContainer />
            </div>
            <div className="row">
                <div id="overflow">
                    <div id="results">
                        <ResultsContainer />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default App

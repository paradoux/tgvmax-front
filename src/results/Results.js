//React imports
import React from 'react'
import Result from './result/Result'

/* The Results component maps through the trains received by ResultsContainer and pass the info to the Result component */
const Results = (props) => {
    return props.loaded.map(train => {
        return <Result key={train.recordid} train={train} />
    })
}

export default Results
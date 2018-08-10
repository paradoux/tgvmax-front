//React imports
import React from 'react'
import Result from './result/Result'

const Results = (props) => {
    return props.loaded.map(train => {
        return <Result key={train.recordid} train={train} />
    })
}

export default Results
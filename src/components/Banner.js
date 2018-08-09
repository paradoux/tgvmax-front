//React imports
import React, { Component } from 'react'

//Component imports
import Searchbar from '../containers/Searchbar'


class Banner extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div id="banner">
                        <div id="banner-title">
                            <h1>Train Hunter</h1>
                        </div>
                        <Searchbar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner

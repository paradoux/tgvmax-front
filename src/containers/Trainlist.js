import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListTGV from '../components/ListTGV';

class Trainlist extends Component {
    constructor() {
        super();
    }


    render() {
        if (this.props.success === true) {
            return (
                <div>
                    <ListTGV />
                </div>
            );
        } else return (null)
    }
}

function mapStateToProps(state) {
    return ({
        success: state.trains.success
    })
}

export default connect(mapStateToProps)(Trainlist);
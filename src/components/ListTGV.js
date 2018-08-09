//React imports
import React, { Component } from 'react';

//Redux imports
import { connect } from 'react-redux';
import { setRow, fetchTrains } from '../actions/index';

import List from '../containers/List'

import moment from 'moment';

class ListTGV extends Component {
    constructor() {
        super();
        this.state = {
            loaded: [],
            rowa: 0,
            rowb: 20,
        }
    }

    componentDidMount = () => {
        this.loadItems()
    }

    loadMore = (direction) => {
        let { rowa, rowb } = this.state
        if (direction === 'forward') {
            rowa += 20
            rowb += 20
            this.setState({ ...this.state, rowa, rowb }, () => {
                this.loadItems()
            })
        }
        else if (direction === 'backward') {
            rowa -= 20
            rowb -= 20
            this.setState({ ...this.state, rowa, rowb }, () => {
                this.loadItems()
            })
        }
    }

    loadItems = () => {
        let { rowa, rowb } = this.state
        let { trains } = this.props
        this.setState({ ...this.state, loaded: trains.slice(rowa, rowb) })
    }

    render() {
        if (this.state.loaded.length !== 0) {
            return (
                <div className="col-md-12">
                    <button onClick={() => this.loadMore("backward")} > Précédent</button>
                    <List loaded={this.state.loaded} />
                    <button onClick={() => this.loadMore("forward")} >Suivant</button>
                </div>
            )
        }
        else return (null)
    }
}

function mapStateToProps(state) {
    return ({
        trains: state.request_results.trains,
    })
}

export default connect(mapStateToProps)(ListTGV);
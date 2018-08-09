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
            pix: 0
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.scrollHandler, true);
        this.loadItems()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler, true);
    }

    scrollHandler = () => {
        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
            this.loadMore()
        }
    }

    loadMore = () => {
        let { rowa, rowb } = this.state
        rowa += 20
        rowb += 20
        this.setState({ ...this.state, rowa, rowb }, () => {
            this.loadItems()
        })
    }

    loadItems = () => {
        let { rowa, rowb } = this.state
        let { trains } = this.props
        this.setState({ ...this.state, loaded: [...this.state.loaded, ...trains.slice(rowa, rowb)] })
    }

    render() {
        if (this.state.loaded.length !== 0) {
            return (
                <div className="col-md-12">
                    <List loaded={this.state.loaded} />
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
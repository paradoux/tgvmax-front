//React imports
import React, { Component } from 'react';

//Redux imports
import { connect } from 'react-redux';

//App imports
import Results from './Results'


class ResultsContainer extends Component {
    constructor() {
        super();
        this.state = {
            loaded: [],
            qtytoload: 20,
            pix: 0
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.scrollHandler, true);
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.trains !== prevProps.trains) {
            this.loadItems()
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollHandler, true);
    }

    scrollHandler = () => {
        let listContainer = document.getElementById('results')
        var scrollLeft = listContainer.scrollLeft
        let sizeContainer = listContainer.scrollWidth
        if ((scrollLeft + listContainer.offsetWidth + 900) >= sizeContainer) {
            this.loadMore()
        }
    }

    loadMore = () => {
        let { qtytoload } = this.state
        qtytoload += 20
        this.setState({ ...this.state, qtytoload }, () => {
            this.loadItems()
        })
    }

    loadItems = () => {
        let { qtytoload } = this.state
        let { trains } = this.props
        this.setState({ ...this.state, loaded: trains.slice(0, qtytoload) })
    }

    render() {
        if (this.state.loaded.length !== 0) {
            return <Results loaded={this.state.loaded} renderResults={this.renderResults} />
        }
        else return (null)
    }
}

const mapStateToProps = (state) => {
    return ({
        trains: state.request_results.trains,
        success: state.request_results.success
    })
}

export default connect(mapStateToProps)(ResultsContainer);
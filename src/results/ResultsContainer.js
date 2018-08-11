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
        window.addEventListener('scroll', this.scrollHandler, true); //We add the scroll event when the component mounts
    }

    /* Allows us to load new trains each time the component receives new trains in its props */
    componentDidUpdate = (prevProps) => {
        if (this.props.trains !== prevProps.trains) {
            this.loadItems()
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollHandler, true); //We remove the scroll event when the component unmounts
    }

    /* Allows us to displaty more trains as the user scrolls to the left */
    scrollHandler = () => {
        let listContainer = document.getElementById('results') //Get the container of the train list
        let sizeContainer = listContainer.scrollWidth //Check the width of this container, including the overflow 
        var scrollLeft = listContainer.scrollLeft //Check how much scrolling has been done by the user
        if ((scrollLeft + listContainer.offsetWidth + 900) >= sizeContainer) { //Triggers the loadMore function as the user arrives to the end of the list 
            this.loadMore()
        }
    }
    /* Each time the loadMore is called, the function loadItems is triggered and the number of trains to load is increased by 20 */
    loadMore = () => {
        let { qtytoload } = this.state
        qtytoload += 20
        this.setState({ ...this.state, qtytoload }, () => {
            this.loadItems() //Waits for the state to be updated before calling loadItems in order for loadItems to get the correct quantity of trains to load
        })
    }

    loadItems = () => {
        let { trains } = this.props //We receive all the results once from the API, store them in the redux state, and reach them every time we want here through props
        let { qtytoload } = this.state //Check how much trains we have to display 
        let loaded = trains.slice(0, qtytoload) //Select all the trains to be displayed among the results from the API
        this.setState({ ...this.state, loaded })
    }

    render() {
        if (this.state.loaded.length !== 0) { //We display the trains when they are ready to be displayed 
            return <Results loaded={this.state.loaded} renderResults={this.renderResults} /> //We pass the trains to display in the props of the Results component
        }
        else return (null) //In preparation for a placeholder
    }
}

const mapStateToProps = (state) => {
    return ({
        trains: state.request_results.trains,
        success: state.request_results.success
    })
}

export default connect(mapStateToProps)(ResultsContainer);
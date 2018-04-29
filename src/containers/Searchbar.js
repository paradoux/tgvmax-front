//React imports
import React, { Component } from "react";

//Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

//App imports
import { fetchTrains } from '../actions/index';

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(e) {
        this.setState({
            term: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchTrains(this.state.term);
    }


    render() {
        return (
            <div>
                <h1> Hello SearchBar ! </h1>

                <form onSubmit={this.onFormSubmit}>

                    <input value={this.state.term} onChange={this.onInputChange} />
                    <span>
                        <button> Submit </button>
                    </span>

                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTrains }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);



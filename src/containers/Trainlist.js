import React, { Component } from 'react';
import { connect } from 'react-redux';


class Trainlist extends Component {

    render() {
        return (
            <div>
                <h1> Hello List </h1>
                {console.log(this.props.trains)}
            </div>

        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return ({
        trains: state.trains,
    })
}

export default connect(mapStateToProps)(Trainlist);
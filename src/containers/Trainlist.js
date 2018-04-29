import React, { Component } from 'react';
import { connect } from 'react-redux';


class Trainlist extends Component {

    renderConsole() {
        if (this.props.trains.trains) {
            this.props.trains.trains.records.forEach((record) => { console.log(record.fields) });
        }
    }



    render() {
        return (
            <div>
                <h1> Hello List </h1>

                {this.renderConsole()}
            </div>

        );
    }

}

function mapStateToProps(state) {
    // console.log(state);
    return ({
        trains: state.trains,
    })
}

export default connect(mapStateToProps)(Trainlist);
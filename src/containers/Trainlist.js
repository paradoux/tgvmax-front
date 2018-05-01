import React, { Component } from 'react';
import { connect } from 'react-redux';


class Trainlist extends Component {
    constructor() {
        super();

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        let trains = this.props.trains.trains;
        if (trains) {
            return trains.records.map((record) => {
                return (
                    <div key={record.fields.destination.recordid}>
                        {(record.fields.destination)}
                    </div>
                )
            });
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return ({
        trains: state.trains,
    })
}

export default connect(mapStateToProps)(Trainlist);
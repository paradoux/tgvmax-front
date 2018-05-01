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
                if (record.fields.od_happy_card === "OUI") {
                    return (
                        <div className="col-md-3">
                            <div className="card" key={record.fields.recordid}>
                                <h1 className="card-title">{(record.fields.destination)}</h1>
                                <p className="card-departure">Départ: {record.fields.heure_depart}</p>
                                <p className="card-arrival">Arrivée: {record.fields.heure_arrivee}</p>
                            </div>
                        </div>
                    )
                } else { return null }

            });
        }
    }

    render() {
        return (
            <div className="row">
                <div id="card-list">
                    <div className="col-md-12">
                        <div className="row">
                            {this.renderList()}
                        </div>
                    </div>
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
//React imports
import React, { Component } from 'react';

//Redux imports
import { connect } from 'react-redux';
import { setRow, fetchTrains } from '../actions/index';

import moment from 'moment';

class ListTGV extends Component {
    constructor() {
        super();

        //this.fetchMore = this.fetchMore.bind(this);
    }

    /*     fetchMore() {
            let row = `${parseInt(this.props.row, 10) + 40}`;
            let city = this.props.city;
            this.props.setRow(row);
            this.props.fetchTrains(city, row);
        } */

    /*     fetchTrains() {
            let { row } = this.props;
            let { city } = this.props;
        }
     */
    renderList() {
        let { trains } = this.props.trains
        return trains.map((train) => {
            return (
                <div className="col-md-3" key={train.recordid + "b"}>
                    <div className="card" key={train.recordid + "d"}>
                        <h1 className="card-title" key={train.recordid + "h"}>{(train.fields.destination)}</h1>
                        <p className="card-date" key={train.recordid + "p1"}> {moment(train.fields.date).format('dddd DD MMM').replace(/\b\w/g, l => l.toUpperCase())}</p>
                        <p className="card-departure" key={train.recordid + "p2"}>Départ: {train.fields.heure_depart.replace(/:/, "h")}</p>
                        <img src={require("../pictures/train-icon.png")} alt="train-icon" className="card-train-icon" key={train.recordid + "i"} />
                        <p className="card-arrival" key={train.recordid + "p3"}>Arrivée: {train.fields.heure_arrivee.replace(/:/, "h")}</p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="row" >
                <div id="card-list">
                    <div className="col-md-12">
                        <div className="row">
                            <button> Précédent</button>
                            {this.renderList()}
                            {/*                             <button onClick={this.fetchMore} >Suivant</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        /*         setRow: (row) => dispatch(setRow(row)), */
        fetchTrains: (city) => dispatch(fetchTrains(city))
    })
}


function mapStateToProps(state) {
    return ({
        /*         success: state.trains.success, */
        trains: state.trains,
        city: state.trains.city,
        /*         row: state.trains.row */
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTGV);
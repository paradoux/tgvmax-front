import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import locale from 'moment/locale/fr';

import axios from 'axios';

class Trainlist extends Component {
    constructor() {
        super();

        this.renderList = this.renderList.bind(this);
        this.fetchMore = this.fetchMore.bind(this);
        this.renderToggler = this.renderToggler.bind(this);
    }

    fetchMore() {

    }

    renderToggler() {
        if (this.props.render === true) { return this.renderList() }
    }

    renderList() {
        const ROOT_URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=tgvmax%40datasncf&start=`;
        const ROOT_URL2 = `&rows=40&facet=date&facet=destination&facet=origine&refine.origine=`;
        const tgvmaxdispo = "&exclude.od_happy_card=NON"
        let city = this.props.departure;
        let start = this.props.start;
        const url = `${ROOT_URL}${start}${ROOT_URL2}${city}${tgvmaxdispo}`;
        moment.locale('fr');
        let promise = axios.get(url);
        promise.then(
            (res) => {
                return
                let trains = res.data;
            })
        /* 
                trains.records = trains.records.sort((a, b) => {
                    let departurea = a.fields.heure_depart;
                    let departureb = b.fields.heure_depart;
                    let datea = a.fields.date;
                    let dateb = b.fields.date;
                    if (departurea.length < 5) { departurea = departurea.split(""); departurea.unshift("0"); departurea = departurea.join(''); }
                    if (departureb.length < 5) { departureb = departureb.split(""); departureb.unshift("0"); departureb = departureb.join(''); }
                    a = datea.replace(/-/g, "").concat(departurea.replace(/:/g, ''));
                    b = dateb.replace(/-/g, "").concat(departureb.replace(/:/g, ''));
                    return a - b;
                });
                return trains.records.map((record) => {
                    return (
                        <div className="col-md-3" key={record.recordid + "b"}>
                            <div className="card" key={record.recordid + "d"}>
                                <h1 className="card-title" key={record.recordid + "h"}>{(record.fields.destination)}</h1>
                                <p className="card-date" key={record.recordid + "p1"}> {moment(record.fields.date).format('dddd DD MMM').replace(/\b\w/g, l => l.toUpperCase())}</p>
                                <p className="card-departure" key={record.recordid + "p2"}>Départ: {record.fields.heure_depart.replace(/:/, "h")}</p>
                                <img src={require("../pictures/train-icon.png")} alt="train-icon" className="card-train-icon" key={record.recordid + "i"} />
                                <p className="card-arrival" key={record.recordid + "p3"}>Arrivée: {record.fields.heure_arrivee.replace(/:/, "h")}</p>
                            </div>
                        </div>
                    )
                });

 */

    }

    render() {
        return (
            <div className="row" >
                <div id="card-list">
                    <div className="col-md-12">
                        <div className="row">
                            <button> Précédent</button>
                            {this.renderToggler()}
                            <button onClick={this.fetchMore} >Suivant</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return ({
        departure: state.trains.departure,
        start: state.trains.start,
        render: state.trains.render
    })
}

export default connect(mapStateToProps)(Trainlist);
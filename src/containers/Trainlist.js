import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import locale from 'moment/locale/fr';

class Trainlist extends Component {
    constructor() {
        super();

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        moment.locale('fr');
        let trains = this.props.trains.trains;
        if (trains) {
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
                console.log(record.fields.heure_depart);
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
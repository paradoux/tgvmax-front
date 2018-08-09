//React imports
import React, { Component } from 'react'
import moment from 'moment'

class List extends Component {
    constructor() {
        super()
    }

    renderList() {
        return this.props.loaded.map((train) => {
            return (
                <div className="col-md-3" key={train.recordid + 'b'}>
                    <div className="card" key={train.recordid + 'd'}>
                        <h1 className="card-title" key={train.recordid + 'h'}>{(train.fields.destination)}</h1>
                        <p className="card-date" key={train.recordid + 'p1'}> {moment(train.fields.date).format('dddd DD MMM').replace(/\b\w/g, l => l.toUpperCase())}</p>
                        <p className="card-departure" key={train.recordid + 'p2'}>Départ: {train.fields.heure_depart.replace(/:/, 'h')}</p>
                        <img src={require('../pictures/train-icon.png')} alt="train-icon" className="card-train-icon" key={train.recordid + 'i'} />
                        <p className="card-arrival" key={train.recordid + 'p3'}>Arrivée: {train.fields.heure_arrivee.replace(/:/, 'h')}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderList()}
            </div>
        )
    }
}



export default List
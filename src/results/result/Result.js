//React imports
import React from 'react'

//Modules imports
import moment from 'moment'
import locale from 'moment/locale/fr';

const Result = (props) => {
    moment.locale('fr');
    return (
        <div className="card">
            <h1 className="card-title" key={props.train.recordid + 'h'}>{(props.train.fields.destination)}</h1>
            <p className="card-departure" key={props.train.recordid + 'p2'}>Départ: {props.train.fields.heure_depart.replace(/:/, 'h')}</p>
            <img src={'https://res.cloudinary.com/dgxwzbutf/image/upload/v1533930345/train-icon_pf9ksy.png'} alt="props.train-icon" className="card-train-icon" key={props.train.recordid + 'i'} />
            <p className="card-arrival" key={props.train.recordid + 'p3'}>Arrivée: {props.train.fields.heure_arrivee.replace(/:/, 'h')}</p>
            <p className="card-date" key={props.train.recordid + 'p1'}> {moment(props.train.fields.date).format('dddd DD MMM').replace(/\b\w/g, l => l.toUpperCase())}</p>
        </div>
    )
}

export default Result
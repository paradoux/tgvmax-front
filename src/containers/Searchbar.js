//React imports
import React, { Component } from "react";

//Redux imports
import { connect } from 'react-redux';

//App imports
import { setDeparture, fetchTrains } from '../actions/index';
import { renderList } from '../actions/index';

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            destinations: ['PARIS (intramuros)', 'LYON (gares intramuros)', 'MARSEILLE ST CHARLES', 'AVIGNON TGV', 'VALENCE TGV RHONE ALPES SUD', 'MONTPELLIER SAINT ROCH', 'AIX EN PROVENCE TGV', 'MARNE LA VALLEE CHESSY', 'NIMES', 'AEROPORT CDG2 TGV ROISSY', 'BORDEAUX ST JEAN', 'MASSY TGV', 'TOULOUSE MATABIAU', 'LE MANS', 'DIJON VILLE', 'STRASBOURG', 'BEZIERS', 'NARBONNE', 'LILLE EUROPE', 'NANTES', 'RENNES', 'SETE', 'NICE VILLE', 'ST PIERRE DES CORPS', 'POITIERS', 'ANGERS ST LAUD', 'TOULON', 'CANNES', 'ANTIBES', 'BELFORT MONTBELIARD TGV', 'ARRAS', 'CARCASSONNE', 'ST RAPHAEL VALESCURE', 'MULHOUSE VILLE', 'BESANCON Franche Comté TGV', 'LES ARCS DRAGUIGNAN', 'ANGOULEME', 'LILLE FLANDRES', 'MONTAUBAN VILLE BOURBON', 'AGEN', 'METZ VILLE', 'BRIVE LA GAILLARDE', 'LIMOGES BENEDICTINS', 'CHAMPAGNE ARDENNE', 'CHATEAUROUX', 'NANCY', 'TGV HAUTE PICARDIE', 'CORBIERES VIERZON VILLE', 'LYON ST EXUPERY', 'THIONVILLE', 'MACON VILLE', 'DOUAI', 'LORRAINE TGV', 'ARLES', 'COLMAR', 'VENDOME VILLIERS SUR LOIR', 'CORBIERES LES AUBRAIS ORLEANS', 'LAVAL', 'CLERMONT FERRAND', 'RIOM CHATEL GUYON', 'VANNES', 'VICHY', 'MOULINS SUR ALLIER', 'NEVERS', 'MEUSE TGV', 'QUIMPER', 'LORIENT', 'SOUILLAC', 'MACON LOCHE TGV', 'GOURDON', 'PERPIGNAN', 'CAHORS', 'LENS', 'BETHUNE', 'HAZEBROUCK', 'AGDE', 'LA SOUTERRAINE', 'NEUFCHATEAU', 'AURAY', 'BOURG EN BRESSE', 'ST BRIEUC', 'NIORT', 'LA ROCHELLE VILLE', 'AIX LES BAINS LE REVARD', 'DAX', 'MARMANDE', 'DUNKERQUE', 'LE CREUSOT MONTCEAU MONTCHANIN', 'BREST', 'MONTBARD', 'CHAMBERY CHALLES LES EAUX', 'SURGERES', 'ANNECY', 'CHALON SUR SAONE', 'ST NAZAIRE', 'UZERCHE', 'LE CROISIC', 'LA BAULE ESCOUBLAC', 'GUINGAMP', 'MORLAIX']
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        e.preventDefault();
        this.setState({
            term: e.target.value.toUpperCase(),
        });
        if (e.target.value.length > 1) { document.getElementById("searchbar-list").classList.add("displayer") } else { document.getElementById("searchbar-list").classList.remove("displayer") }
        // this.onFormSubmit(e);
    }

    onFormSubmit(e) {
        e.preventDefault();
        let row = this.props.row
        let city = this.state.term;
        let splitted = city.split(/(\([^]+\))/g);
        if (splitted.length == 3) { city = splitted[0].concat(splitted[1].toLowerCase()) }
        this.props.setDeparture(city);
        this.props.fetchTrains(city, row);
        /*  this.props.renderList(); */
    }

    dropDestinations() {
        let destinations = this.state.destinations.filter((destination) => {
            return (destination.slice(0, this.state.term.length) === this.state.term)
        });
        return destinations.map((destination) => {
            if (this.state.term.length == destination.length || this.state.term.length == 0 || this.state.term.length == 1) {
                return null
            } else {
                return <li key={destination}> <button id="searchbar-list-item" onClick={this.onInputChange} value={destination}> {destination} </button> </li >
            }
        })
    }

    render() {
        return (
            <div id="banner-searchbar">
                <form id="searchbar-form" autoComplete="off">
                    <input id="searchbar-input" value={this.state.term} onChange={this.onInputChange} placeholder="Sélectionnez votre gare de départ" />
                    <ul id="searchbar-list">
                        {this.dropDestinations()}
                    </ul>
                </form>
                <button id="searchbar-submit" onClick={this.onFormSubmit}> C'est parti ! </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setDeparture: (city) => {
            dispatch(setDeparture(city))
        },
        fetchTrains: (city, row) => {
            dispatch(fetchTrains(city, row))
        },
        renderList: () => {
            dispatch(renderList())
        }
    }
}

function mapStateToProps(state) {
    return ({
        row: state.trains.row,
        city: state.trains.city
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);



//React imports
import React, { Component } from "react";

//Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

//App imports
import { fetchTrains } from '../actions/index';

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
        this.setState({
            term: e.target.value.toUpperCase()
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchTrains(this.state.term);
    }

    dropDestinations() {
        let destinations = this.state.destinations.filter((destination) => {
            return (destination.slice(0, this.state.term.length) === this.state.term)
        });
        return destinations.map((destination) => {
            return <li key={destination}> <button onClick={this.onInputChange} value={destination}> {destination} </button> </li >
        })
    }

    render() {
        return (
            <div>
                <h1> Hello SearchBar ! </h1>

                <form onSubmit={this.onFormSubmit}>

                    <input id="destinationInput" value={this.state.term} onChange={this.onInputChange} />
                    <ul>
                        {this.dropDestinations()}
                    </ul>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTrains }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);



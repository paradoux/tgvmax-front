//React imports
import React, { Component } from 'react'

//Redux imports
import { connect } from 'react-redux'

//App imports
import { fetchTrains } from '../redux/actions/index'
import Search from './Search'

class Searchbar extends Component {
    constructor() {
        super()
        this.state = {
            term: '',
            date: '',
            departures: ['PARIS (intramuros)', 'LYON (gares intramuros)', 'MARSEILLE ST CHARLES', 'AVIGNON TGV', 'VALENCE TGV RHONE ALPES SUD', 'MONTPELLIER SAINT ROCH', 'AIX EN PROVENCE TGV', 'MARNE LA VALLEE CHESSY', 'NIMES', 'AEROPORT CDG2 TGV ROISSY', 'BORDEAUX ST JEAN', 'MASSY TGV', 'TOULOUSE MATABIAU', 'LE MANS', 'DIJON VILLE', 'STRASBOURG', 'BEZIERS', 'NARBONNE', 'LILLE EUROPE', 'NANTES', 'RENNES', 'SETE', 'NICE VILLE', 'ST PIERRE DES CORPS', 'POITIERS', 'ANGERS ST LAUD', 'TOULON', 'CANNES', 'ANTIBES', 'BELFORT MONTBELIARD TGV', 'ARRAS', 'CARCASSONNE', 'ST RAPHAEL VALESCURE', 'MULHOUSE VILLE', 'BESANCON Franche Comté TGV', 'LES ARCS DRAGUIGNAN', 'ANGOULEME', 'LILLE FLANDRES', 'MONTAUBAN VILLE BOURBON', 'AGEN', 'METZ VILLE', 'BRIVE LA GAILLARDE', 'LIMOGES BENEDICTINS', 'CHAMPAGNE ARDENNE', 'CHATEAUROUX', 'NANCY', 'TGV HAUTE PICARDIE', 'CORBIERES VIERZON VILLE', 'LYON ST EXUPERY', 'THIONVILLE', 'MACON VILLE', 'DOUAI', 'LORRAINE TGV', 'ARLES', 'COLMAR', 'VENDOME VILLIERS SUR LOIR', 'CORBIERES LES AUBRAIS ORLEANS', 'LAVAL', 'CLERMONT FERRAND', 'RIOM CHATEL GUYON', 'VANNES', 'VICHY', 'MOULINS SUR ALLIER', 'NEVERS', 'MEUSE TGV', 'QUIMPER', 'LORIENT', 'SOUILLAC', 'MACON LOCHE TGV', 'GOURDON', 'PERPIGNAN', 'CAHORS', 'LENS', 'BETHUNE', 'HAZEBROUCK', 'AGDE', 'LA SOUTERRAINE', 'NEUFCHATEAU', 'AURAY', 'BOURG EN BRESSE', 'ST BRIEUC', 'NIORT', 'LA ROCHELLE VILLE', 'AIX LES BAINS LE REVARD', 'DAX', 'MARMANDE', 'DUNKERQUE', 'LE CREUSOT MONTCEAU MONTCHANIN', 'BREST', 'MONTBARD', 'CHAMBERY CHALLES LES EAUX', 'SURGERES', 'ANNECY', 'CHALON SUR SAONE', 'ST NAZAIRE', 'UZERCHE', 'LE CROISIC', 'LA BAULE ESCOUBLAC', 'GUINGAMP', 'MORLAIX']
        }

        this.onDepartureChange = this.onDepartureChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    /* departure change handler */
    onDepartureChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            term: e.target.value.toUpperCase(),
        })
        /* Waits for two letters before showing the list of suggestions */
        if (e.target.value.length > 1) { document.getElementById('searchbar-list').classList.add('displayer') } else { document.getElementById('searchbar-list').classList.remove('displayer') }
    }
    /* Sate change handler */
    onDateChange = (e) => {
        e.preventDefault()
        this.setState({
            ...this.state,
            date: e.target.value
        })
    }

    /* Submit handler */
    onFormSubmit = (e) => {
        e.preventDefault()
        var city = this.state.term
        var { date } = this.state
        let splitted = city.split(/(\([^]+\))/g)  //Transfrom the city syntax to be understood properly by the api 
        if (splitted.length === 3) { city = splitted[0].concat(splitted[1].toLowerCase()) } //Transfrom the city syntax to be understood properly by the api 
        /* If the user doesn't have a precise departure date we can send a request without */
        if (date === '') { this.props.fetchTrains(city) } //We use the function defined in our redux action creator, the date will be null by default 
        if (date.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/g)) { //We check if the date provided has the correct syntax
            let year = date.slice(6, 10)
            let month = date.slice(3, 5)
            let day = date.slice(0, 2)
            date = `${year}%2F${month}%2F${day}` //We transform the date syntax to be understood properly by the api
            this.props.fetchTrains(city, date) //We use the function defined in our redux action creator
        }
    }

    /* The 100 possible departure cities are hosted in our state. We filter the list for each letter added by the user in the field and display it */
    dropDepartures = () => {
        let departures = this.state.departures.filter((departure) => {
            /* We slice all the departure cities between the first letter and the number written by the user and we compare this piece of word with the one written by the user */
            return (departure.slice(0, this.state.term.length) === this.state.term)
        })
        return departures.map((departure) => {
            /* We display this list as a list of clickable buttons excepted when the word is still too short or when the user found the city */
            if (this.state.term.length === departure.length || this.state.term.length < 1) {
                return null
            } else {
                return <li key={departure}> <button id="searchbar-list-item" onClick={this.onDepartureChange} value={departure}> {departure} </button> </li >
            }
        })
    }

    /* Allows us to erase the field with one click when the user wants to change the departure city or date  */
    resetField = (field) => {
        this.setState({ ...this.state, [field]: '' })
    }

    render() {
        return <Search onDepartureChange={this.onDepartureChange} dropDepartures={this.dropDepartures} onDateChange={this.onDateChange} onFormSubmit={this.onFormSubmit} resetField={this.resetField} resetDate={this.resetDate} term={this.state.term} date={this.state.date} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrains: (city, date) => {
            dispatch(fetchTrains(city, date))
        },
    }
}

export default connect(null, mapDispatchToProps)(Searchbar)



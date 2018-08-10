//React imports
import React from 'react'

const Search = (props) => {
    return (
        <form id="searchbar-form" autoComplete="off">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <input id="searchbar-city" value={props.term} onChange={props.onDestinationChange} onClick={props.resetCity} placeholder="Sélectionnez votre gare de départ" />
                    <ul id="searchbar-list">
                        {props.dropDestinations()}
                    </ul>
                </div>
                <div className="col-md-4">
                    <input id="searchbar-date" value={props.date} onChange={props.onDateChange} onClick={props.resetDate} placeholder="Sélectionnez votre date de départ DD/MM/YYYY" onFocus={(e) => e.target.placeholder = ''} onBlur={(e) => e.target.placeholder = 'Sélectionnez votre date de départ DD/MM/YYYY'} />
                </div>
                <div className="col-md-4">
                    <input id="searchbar-submit" type="submit" value="C&#39;est parti !" onClick={props.onFormSubmit} />
                </div>
            </div>
        </form>
    )
}

export default Search



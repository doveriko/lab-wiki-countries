import React from 'react';

import data from '../countries.json'

import { Link } from 'react-router-dom';

class Countries extends React.Component {

    state = {
        countryList: data
    }

    render() {
        
        return (
            <div>
                <div className="list-group">
                <h1>HOLA</h1>
                {this.state.countryList.map( (country) => {
                    return (<div>
                        {country.name.common}
                    </div>)
                })}
     
                </div>
            </div>
        )
    }

    }

export default Countries

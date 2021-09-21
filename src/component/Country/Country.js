import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,region,population,flag} =props.Country
    return (

            <div className='country'>
            <img src={flag} alt="" />
            <h3>Country Name : {name}</h3>
            <h3>Country capital Name : {capital}</h3>
            <h3>Country region : {region}</h3>
            <h3>Country population : {population}</h3>
            </div>
    );
};


export default Country;
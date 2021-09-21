import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,region,population,flag} =props.Country
    return (

            <div className='country'>
            <h3>Country Name : {name}</h3>
            <img src={flag} alt="" />            
            <h5>Country capital Name : {capital}</h5>
            <h5>Country region : {region}</h5>
            <h5>Country population : {population}</h5>
            </div>
    );
};


export default Country;
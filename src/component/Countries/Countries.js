import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [Coutries,setCoutries] = useState([]);
    useEffect(() =>{
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>setCoutries(data))
    },[])
    return (
        <div>
           
            <h1>Hello From Countries : {Coutries.length}</h1>
            <div className='countries-container'>
                {
                Coutries.map(country =><Country 
                    Country={country}
                    key = {country.name}
                    ></Country>)  
                }
            </div>
            
        </div>
    );
};

export default Countries;
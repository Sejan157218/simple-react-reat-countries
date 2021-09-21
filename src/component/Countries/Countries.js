import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Country from '../Country/Country';


const Countries = () => {
    const [Coutries,setCoutries] = useState([]);
    useEffect(() =>{
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>setCoutries(data))
    },[])
    console.log(Coutries);
    return (
        <div>
           
            <h1>Hello From Countries : {Coutries.length}</h1>
            {
              Coutries.map(country =><Country Country={country}></Country>)  
            }
            
        </div>
    );
};

export default Countries;
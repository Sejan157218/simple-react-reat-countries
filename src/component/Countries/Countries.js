
import { useEffect,useState } from 'react';

import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {


    const [coutries,setCoutries] = useState([]);

    useEffect(() =>{
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>setCoutries(data))
    },[])
    return (
        <div>
           
            <h1>Hello From Countries : {coutries.length}</h1>
            <div className='countries-container'>
                {
                coutries.map(country =><Country 
                    Country={country}
                    key = {country.name}
                    ></Country>)  
                }
            </div>
            
        </div>
    );
};

export default Countries;
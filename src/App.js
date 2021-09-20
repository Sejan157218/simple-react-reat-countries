import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ContryFetch></ContryFetch>
      
    </div>
  );
}
function ContryFetch(){

  const [countries,setCountry] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data =>setCountry(data))
  },[])
  return(
    <div>
     {
      countries.map(country => console.log(country.name))
     }
    </div>
  )

}
    

export default App;

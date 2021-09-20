
import './App.css';
import Country from './component/Country/Country';
import Person from './component/Person/Person';




function App() {
  return (
    <div className="App">
      <Person></Person>
      <Country></Country>
    </div>
  );
}
/* function ContryFetch(){

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

} */
    

export default App;


import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
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

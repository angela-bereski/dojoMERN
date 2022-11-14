import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [list, setList] = useState([])
  useEffect(()=>{
    async function callPokemon() {
      try {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        setList(result.results)
      } catch(error){
        console.log(error)
      }
    } callPokemon();
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
  //   .then((result)=>{
  //     setList(result.results)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  }, [])

  // const apiCall = async () => {
  //   try {
  //     const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
  //     setList(result.results)
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className="App">
      <div>
        {/* <button onClick={apiCall}>Get Pokemon</button> */}
        {
          list.map((pokemon)=>(
            <h2>{pokemon.name}</h2>
          ))
        }
      </div>
    </div>
  );
}

export default App;

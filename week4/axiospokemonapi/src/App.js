import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [list, setList] = useState([])
  // useEffect(()=>{
  //   async function callPokemon() {
  //     try {
  //       const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
  //       setList(result.data.results)
  //     } catch(error){
  //       console.log(error)
  //     }
  //   } callPokemon();
  // }, [])

  const getPokemon = async () => {
    try {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      setList(result.data.results)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={getPokemon}>Get Pokemon</button>
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

import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [list, setList] = useState([])
  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((res)=>{
      return res.json()
    }).then((result)=>{
      setList(result.results)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      {
        list.map((pokemon)=>(
         <h2>{pokemon.name}</h2>
        ))
      }
    </div>
  );
}

export default App;

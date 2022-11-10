import './App.css';
import ToDoList from './components/ToDoList';
import {useState} from 'react';

function App() {
  const [list, setList] = useState([
    {
      id:1,
      item:"Get MERN Black Belt",
      completed: false
    }
  ])

  return (
    <div className="App">
      <ToDoList list={list} setList={setList} />
    </div>
  );
}

export default App;

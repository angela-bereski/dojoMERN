import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from 'react-router';

function App() {
  const Home = (props) => {
    return (
      <h1>Welcome!</h1>
    )
  }

  const Value = (props) => {
    const {val} = useParams();
      if (isNaN(val) === true) {
        return (
          <h1>The word is: {val}</h1>
          
        )
      } else {
        return (
          <h1>The number is: {val}</h1>
        )}
  }

  const Styled = (props) => {
    const {word, col, bg} = useParams();

    return (
      <span style={{color: col}}>
        <h1 style={{backgroundColor: bg}}>The word is: {word}</h1>
      </span>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:val" element={<Value />} />
          <Route path="/:word/:col/:bg" element={<Styled />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

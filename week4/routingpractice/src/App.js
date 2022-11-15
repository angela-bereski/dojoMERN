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
      if (isNaN(+{val}) === true) {
        return (
          <h1>The word is: {val}</h1>
          
        )
      } else {
        return (
          <h1>The number is: {val}</h1>
        )}
  }
  
  // const Number = (props) => {
  //   const {num} = useParams();
  //     return (
  //       <h1>The number is: {num}</h1>
  //     )
  // }

  // const Word = (props) => {
  //   const {word} = useParams();
  //     return (
  //     <h1>The word is: {word}</h1>
  //   )
  // }

  const Styled = (props) => {
    const {word, col, bg} = useParams();
    // const {col} = useParams();
    // const {bg} = useParams();

    return (
      <h1 style={{color: {col}, bg: {bg}}}>The word is: {word}</h1>
    )
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:val" element={<Value />} />

          {/* <Route path="/:word" element={<Value />} /> */}
          <Route path="/:word/:color/:bg" element={<Styled />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

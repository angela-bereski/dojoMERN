

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
//import ProductForm from './components/ProductForm';
//import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products" default />
          <Route element={<Detail/>} path="/products/:id" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
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
          <Route element={<Update/>} path="products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

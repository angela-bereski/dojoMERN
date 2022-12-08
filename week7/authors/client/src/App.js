import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorForm from './components/AuthorForm';
import DisplayAuthors from './components/DisplayAuthors';
import Main from './views/Main';
import Edit from './components/EditAuthor';
import View from './components/ViewAuthor';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route element={<Main/>} path='/authors' default />
          <Route element={<AuthorForm/>} path='/addAuthor' default />
          <Route element={<Edit/>} path='/authors/edit/:id' />
          <Route element={<View/>} path='/authors/:id' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

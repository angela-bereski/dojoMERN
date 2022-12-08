import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="pretty">
        <h1>Favorite Authors</h1>
        <div className="navNav">
          <NavLink to ="/authors">Home</NavLink>
          <NavLink to ="/addAuthor">Add New Author</NavLink>
        </div>
    </div>
  )
}

export default NavBar
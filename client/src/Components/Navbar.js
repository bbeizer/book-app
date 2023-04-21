import React from 'react';
import {  Link } from "react-router-dom";
const NavBar= () =>{
  return (
  <nav>
    <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/messages">Messages</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/savedlibrary">SavedLibrary</Link>
        </li>
        <li>
            <Link to="/search">Search</Link>
        </li>
    </ul>
  </nav>
  );
}
export default NavBar;
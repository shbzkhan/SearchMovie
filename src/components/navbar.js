import React from "react";
import SearchForm from "./SearchForm";
import "./navbar.css";


const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>SK Movie</h1>
    <div className="nav-search">
      <SearchForm/>
    </div>
    </nav>
  )

};

export default Navbar;

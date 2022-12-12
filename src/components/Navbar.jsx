import React from "react"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return <div id="navbarContainer">
    <div id="navbarLogo">
      <h2> Logo </h2>
    </div>
    <div className="navbarRight">
      <ul className="navbarLinks">
        <li> <Link to ="/"> Home </Link></li>
        <li> <Link to ="/resume"> Resume </Link></li>
        <li> <Link to ="/projects"> Projects </Link></li>
        <li> Instagram </li>
        <li> LinkedIn </li>
      </ul>
    </div>
  </div>;
};

export default Navbar;

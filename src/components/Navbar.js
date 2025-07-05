import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assests/pizzaLogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>

        <div className={`links ${open ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button className="menu-button" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


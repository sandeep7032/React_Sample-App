import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="title">
        <h2>Sandeep</h2>
      </div>
      <div className="menu flexC">
        <Link to="/">Home</Link>
        <Link to="/data">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;

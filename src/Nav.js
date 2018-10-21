import React, { Component } from 'react';
import './App.css';

class Nav extends Component {
  constructor () {
    super();

    this.state=({  angler: ""})

  }
  render() {
    
    return (
        <div className="nav">
       <div className="nav-button" id="logo">The Fishing Log App</div>
       <button className="nav-button">Enter trip data </button>
       <button className="nav-button">Enter catch data </button> 
       <button className="nav-button">Trip Planner </button>
        <button className="nav-button">Solunar Calendar </button>
        <button className="nav-button">GPS </button> 
       <button className="nav-button">Help Me</button>
        <button className="nav-button">The one that got away </button>
        </div>
    );
  }
}

export default Nav;
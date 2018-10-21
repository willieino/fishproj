import React, { Component } from 'react';
import '../App.css';

class NavLeft extends Component {
  constructor () {
    super();

    this.state=({  angler: ""})

  }
  render() {
    
    return (
        <div className="nav-left">
        <ul className="nav-list">
            <li className="nav-left-item">Home</li> 
            <li className="nav-left-item">Trips</li> 
            <li className="nav-left-item">Catch</li> 
            <li className="nav-left-item">Graphs/Charts</li> 
            <li className="nav-left-item">Statistics</li>
            <li className="nav-left-item">Gallery</li>  
            <li className="nav-left-item">Print</li>
            <li className="nav-left-item">Log Out</li>  
            
            
            </ul>
        
        </div>
    );
  }
}

export default NavLeft;




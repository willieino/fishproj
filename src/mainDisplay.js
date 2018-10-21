import React, { Component } from 'react';
import './App.css';

class MainDisplay extends Component {
  constructor () {
    super();

    this.state=({  angler: ""})

  }
  render() {
    
    return (
        <div className="main-display">
        all the tables will be displayed here
        
        </div>
    );
  }
}

export default MainDisplay;





import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import MainDisplay from "./Components/mainDisplay"
import NavLeft from "./Components/NavLeft"

class App extends Component {
  constructor () {
    super();

    this.state=({  angler: ""})

  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
            <Nav> </Nav>  
        </header>
        <div className="main-container">
       <NavLeft />
       <MainDisplay />
       
        
        </div>
      </div>
    );
  }
}

export default App;

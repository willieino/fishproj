import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav";
import MainDisplay from "./Components/mainDisplay"
import NavLeft from "./Components/NavLeft"

class App extends Component {
  constructor (props) {
    super(props);

    this.state=({  
      viewTrip: false,
      enterTrip: false
  })

  }

  changeSelected = e => {  
   this.setState({ viewTrip: true })
   console.log("in the app")
   console.log(this.state)
  
  };



  render() {
    
    return (
      <div className="App">
        <header className="App-header">
            <Nav viewTrip={this.state.viewTrip} enterTrip={this.state.enterTrip} changeSelected={this.changeSelected} > </Nav>  
        </header>
        <div className="main-container">
       <NavLeft />
       <MainDisplay viewTrip={this.state.viewTrip} enterTrip={this.state.enterTrip} />
       
        
        </div>
      </div>
    );
  }
}

export default App;

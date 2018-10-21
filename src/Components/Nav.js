import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {
  constructor (props) {
    super(props);

    this.state= {  
      viewTrip: this.props.viewTrip, 
      enterTrip: this.props.enterTrip  
    }
    console.log(this.state)
  }

  onComponentDidMount() {

console.log("in the nav")
    console.log(this.state)
  }


  clickHandler = () => {
   return 
//display the tripTbl form

   
 
    }
    
  render() {
    
    return (
        <div className="nav">
       <div className="nav-button" id="logo">The Fishing Log App</div>
       <button className="nav-button" onClick={this.props.changeSelected}>View trip data </button>
       <button className="nav-button" onClick={this.clickHandler}>Enter trip data </button> 
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
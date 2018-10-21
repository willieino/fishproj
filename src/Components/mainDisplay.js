import React, { Component } from 'react';
import '../App.css';
import CatchData from "./CatchData"
import tblStyle from "../Tables/tbl-Style"
import tripTbl from "../Tables/tripTbl"
import TripData from "./TripData";
import TripFrm from "./TripFrm";


class MainDisplay extends Component {
  constructor (props) {
    super(props);

    this.state = {  
      viewTrip: this.props.viewTrip,
      enterTrip: this.props.enterTrip
  }
  console.log("in the main")
console.log(this.state)
  }
  render() {
   
      
    if (this.state.viewTrip) return <div className="main-display"><TripData /></div>
    return <div className="main-display"><TripFrm /></div>;
    



  /*   return (
        <div className="main-display">Click on the Items to Add a fishing Style
        {tblStyle.map((styles, index) => {
  return <CatchData key={styles.ID} style={styles.Style} />
})}  
    </div> */
      
      
   
  }
}

export default MainDisplay;





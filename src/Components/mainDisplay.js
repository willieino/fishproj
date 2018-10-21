import React, { Component } from 'react';
import '../App.css';
import CatchData from "./CatchData"
import tblStyle from "../Tables/tbl-Style"

class MainDisplay extends Component {
  constructor (props) {
    super(props);

    this.state = {  angler: ""}

  }
  render() {
    
    return (
        <div className="main-display">Click on the Items to Add a fishing Style
        {tblStyle.map((styles, index) => {
  return <CatchData key={styles.ID} style={styles.Style} />
})}  
    </div>
      
      
    );
  }
}

export default MainDisplay;





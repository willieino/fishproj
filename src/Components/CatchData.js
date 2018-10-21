import React, { Component } from 'react';
import tblStyle from "../Tables/tbl-Style" 
import '../App.css';

class CatchData extends Component {
  constructor (props) {
    super(props);

    this.state = {  TblStyle: [] }


  }
 

  render() {
    
    return (
        <div className="catch-data"><div className="style-text">
    Fishing Style:</div> <div className="style"> {this.props.style}</div>


        </div>
    );
  }
}

export default CatchData;
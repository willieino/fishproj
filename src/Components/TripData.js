import React, { Component } from 'react';
import tripTbl from "../Tables/tripTbl" 
import '../App.css';

class TripData extends Component {
  constructor (props) {
    super(props);

    this.state = {  TblStyle: [] }


  }
 

  render() {
    
    return (
        <div className="trip-data">
        <div className="style-text">Trip Name:</div> 
        <div className="style"> {this.props.trip}</div>
        <div className="style-text">Duration:</div> 
        <div className="style"> {this.props.duration}</div>
        <div className="style-text">Start Date:</div> 
        <div className="style"> {this.props.startDate}</div>
        <div className="style-text">Place:</div> 
        <div className="style"> {this.props.place}</div>
        <div className="style-text">Photos:</div> 
        <div className="style"> {this.props.photos}</div>
        <div className="style-text">Notes:</div> 
        <div className="style"> {this.props.notes}</div>
        <div className="style-text">Anglers:</div> 
        <div className="style"> {this.props.anglers}</div>
        <div className="style-text">GPS1:</div> 
        <div className="style"> {this.props.gps1}</div>
        <div className="style-text">GPS2:</div> 
        <div className="style"> {this.props.gps2}</div>
        <div className="style-text">Image Caption:</div> 
        <div className="style"> {this.props.imgCaption}</div>

        </div>
    );
  }
}

export default TripData;
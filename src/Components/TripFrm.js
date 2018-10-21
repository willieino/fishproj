import React, { Component } from 'react';
import tripTbl from "../Tables/tripTbl" 
import '../App.css';

class TripFrm extends Component {
  constructor (props) {
    super(props);

    this.state = {  
      trip: "",
      startDate: "",
      duration: 0,
      place: "",
      photos: "",
      notes: "",
      anglers: "",
      gps1: "",
      gps2: "",
      imgCation: "",
     }

  }
 
  componentDidMount() {
console.log("component did mount")
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
   /*  this.setState({ [e.target.name]: e.target.value }); */
   console.log("in the handleSubmit")
  }


  render() {
    
    return (
        <form className="trip-form" onSubmit={this.handleSubmit}>
        <div className="trip-container"><div className="trip-header">Enter your trip data. Press Save when finished.</div>
        <div className="input-container"><div className="trip-text">Trip Name: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler} name="trip" />
        <div className="trip-text">Start Date: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="startDate" />
        <div className="trip-text">Duration: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="duration" />
        <div className="trip-text">Place: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="place" />
        <div className="trip-text">Photos: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="photos" />
        <div className="trip-text">Notes: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="notes" />
        <div className="trip-text">Anglers: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="anglers" />
        <div className="trip-text">GPS1: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="gps1" />
        <div className="trip-text">GPS2: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="gps2" />
        <div className="trip-text">Image Caption: </div>
        <input type="text" className="trip" value={this.state.value} onChange={this.changeHandler}  name="imgCaption" />
        </div>
        <div className="button-container"> 
        <button type="submit" className="nav-button" onClick={this.props.handleSubmit}>Save Changes</button>
       <button className="nav-button" onClick={this.clickHandler}>Clear Fields </button> 
       <button className="nav-button">Cancel Changes</button>
       </div>
        </div>
        </form>
    );
  }
}

export default TripFrm;
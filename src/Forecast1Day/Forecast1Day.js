import React, { Component } from 'react';
import './Forecast1Day.css';


class Forecast1Day extends Component {

    createDay(day,description,icon,temperature){
        let daysNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return (
            <div className="dayCard">
                <div className="day">{daysNames[day]}</div>
                <div className="description">{description}</div>
                <img className="icon" src={require('./icons/' + icon + '.png')}
                                      alt={"Photo of " + description + " Weather"}
                                      title={description + " Weather"}/>
                <div className="temperature">°{temperature}</div>
            </div>
        )
    }
	render() {
        return this.createDay(
            parseInt(this.props.day),
            this.props.description,
            this.props.icon,
            this.props.temperature
            )
	}
}

export default Forecast1Day;
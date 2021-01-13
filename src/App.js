import React from 'react';
import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';

class App extends React.Component {
    constructor(props) {
		super(props);
		this.state ={
            days: []
        }
	}

    componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
            .then((days)=> {
                this.setState({days})
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.days.map((day,i)=>{
                    return <Forecast1Day
                    key={i}
                    day={day.day}
                    temperature={day.temperature}
                    description={day.description}
                    icon={day.icon}
                    ></Forecast1Day> })
                }
            </div>
        )
    }

}

export default App;

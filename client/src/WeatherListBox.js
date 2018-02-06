import React, { Component } from 'react';
import SingleWeatherBox from './SingleWeatherBox';
import './SingleWeatherBox.css';

class WeatherListBoxes extends Component {

    renderWeather = () => {
        var arr = this.props.posts;
        return arr.map((weather, index) =>  
            //  <SingleWeatherBox key={index} amount={expense.amount} categ={expense.categ} descr={expense.descr} /> ----- the same in ES5
            <SingleWeatherBox key={index} {...weather} />
        );
    }

    render () {
        return(
            <div className="weather-list">
                {this.renderWeather()}
            </div>
        )
    }
}

export default WeatherListBoxes;

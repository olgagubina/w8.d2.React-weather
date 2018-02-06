import React, { Component } from 'react';

class SingleWeatherBox extends Component {
    render() {
        return (
            <div className="weather-box col-30">
            <div className="img-wrap"><img src={this.props.icon} alt="Weather icon"></img></div>
            <div className="text-wrap">
            <h3>{this.props.name}</h3>
            <p className="weather-info"> {this.props.text} {this.props.temp} | C </p>
            <p className="updated">at {this.props.updated}</p>
            </div>
            </div>
        );
    }
}

export default SingleWeatherBox;
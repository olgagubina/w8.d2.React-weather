import React, { Component } from 'react';
import './Form.css';
import axios from 'axios'


class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { city: [] }
    }

    changeCity = (e) => {
        this.setState({city: e.target.value });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        var url = `http://api.apixu.com/v1/current.json?key=e3b2c79db7e344dd8de74434180602&q=${this.state.city}`
    
        axios.get(url) //<==Calling axios with a get request and pass the url
          .then(response => {
            var structure = {
              name: response.data.location.name,
              updated: response.data.current.last_updated,
              icon: response.data.current.condition.icon,
              temp: response.data.current.temp_c,
              text: response.data.current.condition.text,
              comments: []
            };
            this.props.submitWeather(structure);
            this.setState({city: []});
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
          });
    }

    render() {
        return (
            <div className="Form">
                <form id="getWeatherForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input id="city" type="text" className="city-input form-group" required placeholder="Enter the City" value={this.state.city} onChange={this.changeCity}></input>
                    </div>
                    <button className="pull" type="Submit">Search</button>
                </form>
            </div>
        );
    }
}

export default Form;
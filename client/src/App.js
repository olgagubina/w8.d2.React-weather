import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import WeatherListBoxes from './WeatherListBox';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {posts:[
      {name: "Paris",
      updated:  "2018-02-06 08:30",
      icon: "//cdn.apixu.com/weather/64x64/day/326.png",
      temp: 0,
      text: "Light snow",
      comments: []}]}
  } 

  submitWeather = (data) => { 
    var isNewCity = true;
    var arr = this.state.posts;

    for (var post of arr) {
      if(data.name === post.name) {
        isNewCity = false;
      } 
    }

    if (isNewCity) {
      this.setState(prevState => ({
        posts: prevState.posts.concat(data)
      }));
      console.log(arr);
    }
  };

  render() {
    return (
      <div className="App">
        <nav>
          <p className="rocket"><img src={require("./animat-rocket-color.gif")} alt="Weather"></img></p>
          <p>Weather React Chat</p>
          <p><a>Home</a></p>
          <p><a>About</a></p>
        </nav>
        <hr />
        <Form submitWeather={this.submitWeather} />
        <WeatherListBoxes posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

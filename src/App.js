/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Map.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityName: '',
      cityData: [],
      cityMap: '',
      error: false,
      errorMessage: '',
      weatherData: []
    }
  }


handleInput = (e) => {
  this.setState({
    city: e.target.value
  })
}

handleSubmit = async (e) => {
  e.preventDefault();

  try {

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json&limit=1`

    let cityDataFromAxios = await axios.get(url);

    let lat = cityDataFromAxios.data[0].lat;
    let lon = cityDataFromAxios.data[0].lon;

    console.log(cityDataFromAxios.data[0]);
    console.log(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=12`)

    

    this.handleGetWeather(lat, lon);
    
    this.setState({
      cityData: cityDataFromAxios.data[0],
      error: false,
      cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=12`
    })

  } catch (error) {
    this.setState({
      error: true,
      errorMessage: error.message
    })
  } 
}
// *** weather handler to get data from the backend***
  handleGetWeather = async (lat, lon) => {

  try {
    let url = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}&searchQuery=${this.state.city}`

    //*** use axios to connect to server ****
    let weatherDataFromAxios = await axios.get(url);

    // save weather data to state
    this.setState({
      weatherData: weatherDataFromAxios.data
    });

  } catch (error) {
    this.setState({
      error: true,
      errorMessage: error.message
    })
  }
  }

  render() {
      let lat = this.state.cityData.lat;
      let lon = this.state.cityData.lon;
      // let weather = this.state.weatherData;
      // let date = this.state.valid_date;
      // let description = this.state.description;

    return (
    <>
    <main>

      <h1>City Explorer</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a City  <input type="text" onInput={this.handleInput}></input>
          <button type='submit'>Explore!</button>
          </label>
        </form>


        {/*Ternary for display*/}

        {
          this.state.error
          ? <p>{this.state.errorMessage}</p>
          : <p>{this.state.cityData.display_name}</p>
        }
        

        <p>Latitude: {lat} - Longitude: {lon}</p>

        <div><img src={this.state.cityMap} alt={this.state.cityName}/></div>
      
        </main>
    </>
    
   )
}
}

export default App;

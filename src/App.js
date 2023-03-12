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
      errorMessage: ''
    }
  }

handleInput = (event) => {
  this.setState({
    city: event.target.value
  })
}

getCityData = async (event) => {
  event.preventDefault();

  try {

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json&limit=1`

    let cityDataFromAxios = await axios.get(url)

    let lat = this.state.cityData.lat;
    let lon = this.state.cityData.lon;
    
    this.setState({
      cityData: cityDataFromAxios.data[0],
      error: false,
      cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${lat},${lon}&zoom=10`
    })

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

  
   return (
    <>
    <main>

      <h1>City Explorer</h1>

        <form onSubmit={this.getCityData}>
          <label>Enter a City<input type="text" onInput={this.handleInput}></input>
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

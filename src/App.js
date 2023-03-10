import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityName: '',
      cityData: [],
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
    console.log(cityDataFromAxios.data)
    
    this.setState({
      cityData: cityDataFromAxios.data[0],
      error: false,
      cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&markers=icon:tiny-red-cutout|${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}&zoom=12`
    })

  } catch (error) {
    console.log(error);
    this.setState({
      error: true,
      errorMessage: error.message
    })
  } 
}

render() {
   return (
    <>
      <h1>City Explorer</h1>
      <main>
        <form onSubmit={this.getCityData}>
          <label>Enter a City<input type="text" onInput={this.handleInput}></input>
          <button type='submit'>Explore!</button>
          </label>
        </form>
      </main>
    </>
   )
}


}

export default App;

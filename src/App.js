import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsData: [],
      cityName: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }
}

export default App;

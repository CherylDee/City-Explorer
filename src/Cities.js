import React from "react";
import Card from "react-bootstrap/Card";


class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <>
      {this.props.cityData.map((city, idx) => (
        <Card style={{ width: '18rem' }} key={idx}>
          <Card.Body>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${city.lat},${city.lon}&size=500x500&zoom=14`} alt={city.display_name}/>
            <Card.Title>City Information: {city.display_name}</Card.Title>
            <Card.Text>Latitude: {city.lat}</Card.Text>
            <Card.Text>Longitude: {city.lon}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      </>
    )
  }
}

export default Cities;

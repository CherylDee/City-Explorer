import React from "react";
import Card from "react-bootstrap/Card";


class WeatherNow extends React.Component {

  render() {
    return (
      <>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Date: {this.props.date}</Card.Title>
                <Card.Text>Weather: {this.props.description}</Card.Text>
              </Card.Body>
            </Card>
      </>
    )
  }
}

export default WeatherNow;
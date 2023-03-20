import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component {
  render() {
    return (
      <>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            {/* <Card.Img variant="top" src={} alt={} /> */}
            <Card.Title>Title: {this.props.title}</Card.Title>
            <Card.Text>Release Date: {this.props.release_date}</Card.Text>
            <Card.Text>Overview: {this.props.overview}</Card.Text>
            <Card.Text>Average vote: {this.props.vote_average}</Card.Text>
            <Card.Text>Number of Votes: {this.props.vote_count}</Card.Text>
            <Card.Text>Popularity: {this.props.popularity}</Card.Text>
          </Card.Body>
        </Card>

      </>
    )
  }
}

export default Movie;
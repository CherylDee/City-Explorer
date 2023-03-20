import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
 
  render() {
    return (
      <>
        {this.props.movieData.map((movie) => {
          return (
          <Movie 
            // image_url src={} alt={} />
              title={movie.title}
              release_date={movie.release_date}
              overview={movie.overview}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              popularity={movie.popularity}
            
            />
        )})}
      </>
    )
  }
}

export default Movies;
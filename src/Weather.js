import React from "react";
import WeatherNow from "./WeatherNow";

class Weather extends React.Component {

  render() {
    return (
      <>
        {this.props.weatherData.map((e) => {
          return (
            <WeatherNow
                date={e.date}
                description={e.description}
              />
          )
        })}
      </>
    )
  }
}

export default Weather;
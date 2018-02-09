import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadWeather, TOGGLE_FAHRENHEIT } from "./state/action";

class CityView extends Component {

  

  componentWillReceiveProps(nextProps) {
    if (this.props.match === nextProps.match) return
    const cityToDisplay = this.props.locations.find((location) => (location.nameInURL === this.props.match.params.name))
    console.log(cityToDisplay);

    if (cityToDisplay)
      this.props.loadWeatherToCityView(cityToDisplay.id)
  }

  render() {

    const cityToDisplay = this.props.locations.find((location) => (location.nameInURL === this.props.match.params.name))

    return (
      <div className='cityView card' style={{ width: '700px' }}>
        <div className='row'>
          <div className="cityView" style={{ width: '100%' }}>
            <h1>San Jose, CA</h1>
            <div className="small-6 large-5 columns">
              <div>Humidity: {this.props.weatherLoadingStatus === "success" && this.props.weatherDataOnView && this.props.weatherDataOnView.main.humidity}</div>
              <div>Temperature (High): {this.props.weatherLoadingStatus === "success" && this.props.weatherDataOnView && Math.round(this.props.weatherDataOnView.main.temp_max)}</div>
              <div>Temperature (Low): {this.props.weatherLoadingStatus === "success" && this.props.weatherDataOnView && Math.round(this.props.weatherDataOnView.main.temp_min)}</div>
              <div>Status {this.props.weatherLoadingStatus === "success" && this.props.weatherDataOnView && this.props.weatherDataOnView.weather[0].description}</div>
              <input onChange={() => this.props.toggleFahrenheit(cityToDisplay.id)} type="checkbox" checked={cityToDisplay ? cityToDisplay.fahrenheit : true} name="Fahrenheit" /><label>Fahrenheit</label>
            </div>
            <div className="small-6 large-7 columns">
              <img alt="CityImage" src={cityToDisplay && cityToDisplay.imageURL} />
          </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    weatherLoadingStatus: state.weatherLoadingStatus,
    locations: state.locations,
    weatherDataOnView: state.weatherDataOnView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadWeatherToCityView: (id) => dispatch(
      loadWeather(id)
    ),
    toggleFahrenheit: (id) => dispatch({type: TOGGLE_FAHRENHEIT, payload: id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CityView);

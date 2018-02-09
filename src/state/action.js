import axios from "axios"

export const REQUEST_CITY_WEATHER = "REQUEST_CITY_WEATHER";
export const RECEIVED_CITY_WEATHER = "RECEIVED_CITY_WEATHER";
export const TOGGLE_FAHRENHEIT = "TOGGLE_FAHRENHEIT";

function loadWeather(id) {
    return (dispatch, getState, api) => {

        dispatch({ type: REQUEST_CITY_WEATHER })

        const promise = axios.get(api + "id=" + id + '&units=imperial&&appid=' + localStorage.getItem('apiKey'));

        promise.then(({ data: weatherData }) => {
            dispatch({ type: RECEIVED_CITY_WEATHER, payload: weatherData })
        }, () => { })
        promise.catch(({ data: weatherData }) => {
            dispatch({ type: RECEIVED_CITY_WEATHER });
        })
    }
}

export { loadWeather }

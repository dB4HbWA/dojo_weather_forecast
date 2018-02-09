import axios from "axios"

export const REQUEST_CITY_WEATHER = "REQUEST_CITY_WEATHER";
export const RECEIVED_CITY_WEATHER = "RECEIVED_CITY_WEATHER";
export const TOGGLE_FAHRENHEIT = "TOGGLE_FAHRENHEIT";
export const ADD_CITY = "ADD_CITY"
export const REQUESTING_TO_ADD_CITY = "REQUESTING_TO_ADD_CITY"

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

function addANewCity(cityName) {
    return (dispatch, getState, api) => {

        dispatch({ type: REQUESTING_TO_ADD_CITY })

        const promise = axios.get(api + "q=" + cityName + '&&appid=' + localStorage.getItem('apiKey'));

        promise.then(({ data: weatherData }) => {

            const newCity = { id: weatherData.id, nameInURL: weatherData.name.toLowerCase().trim(), imageURL: "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?h=350&auto=compress&cs=tinysrgb", fahrenheit: true }
            dispatch({ type: ADD_CITY, payload: newCity })
        }, () => { })
        promise.catch(({ data: weatherData }) => {
            dispatch({ type: ADD_CITY });
        })
    }
}

export { loadWeather }

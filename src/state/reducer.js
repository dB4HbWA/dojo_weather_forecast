import { RECEIVED_CITY_WEATHER, REQUEST_CITY_WEATHER, TOGGLE_FAHRENHEIT, ADD_CITY, REQUESTING_TO_ADD_CITY } from './action';

const initialState = {
    weatherLoadingStatus: "",
    addingCityStatus: "",
    locations: JSON.parse(localStorage.getItem("listOfCities")), // {id, displayNameForUrl, imageURL}
    weatherDataOnView: undefined
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CITY_WEATHER:
            return { ...state, weatherLoadingStatus: "loading" }
        case RECEIVED_CITY_WEATHER:
            if (action.payload === undefined)
                return { ...state, weatherLoadingStatus: "failed" }
            return { ...state, weatherDataOnView: action.payload, weatherLoadingStatus: "success" }
        case TOGGLE_FAHRENHEIT:
            const index = state.locations.findIndex((location) => (location.id === action.payload))

            let tempLocations = state.locations.slice();

            if (tempLocations[index].fahrenheit)
                tempLocations[index].fahrenheit = false;
            else
                tempLocations[index].fahrenheit = true;

            return { ...state, locations: tempLocations }
        case REQUESTING_TO_ADD_CITY:
            return { ...state, addingCityStatus: "loading" }
        case ADD_CITY:
            if (action.payload === undefined)
                return { ...state, addingCityStatus: "failed" }
            
            localStorage.setItem("listOfCities", JSON.stringify(state.locations.concat([action.payload])))
            return { ...state, locations: state.locations.concat([action.payload]), addingCityStatus: "success" }

        default:
            return state;
    }
}

export default reducer;
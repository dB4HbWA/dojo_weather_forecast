import { RECEIVED_CITY_WEATHER, REQUEST_CITY_WEATHER, TOGGLE_FAHRENHEIT } from './action';

const initialState = {
    weatherLoadingStatus: "",
    locations: [{ id: 1689431, nameInURL: "sanjose", imageURL: "https://i.ytimg.com/vi/car6ehhepxw/maxresdefault.jpg", fahrenheit: true }], // {id, displayNameForUrl, imageURL}
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
        default:
            return state;
    }
}

export default reducer;
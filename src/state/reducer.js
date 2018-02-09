import { RECEIVED_CITY_WEATHER, REQUEST_CITY_WEATHER, TOGGLE_FAHRENHEIT } from './action';

const initialState = {
    weatherLoadingStatus: "",
    locations: [{ id: 1689431, nameInURL: "sanjose", imageURL: "https://i.ytimg.com/vi/car6ehhepxw/maxresdefault.jpg", fahrenheit: true },
                { id: 5331835, nameInURL: "burbank", imageURL: "http://www.aandamoving.com/wp-content/uploads/2015/06/mover-burbank-ca.jpg", fahrenheit: true },
                { id: 4684888, nameInURL: "dallas", imageURL: "https://www.animationcareerreview.com/files/styles/large/public/images/articles/dallas.jpg", fahrenheit: true },
                { id: 4887398, nameInURL: "chicago", imageURL: "https://i.ytimg.com/vi/car6ehhepxw/maxresdefault.jpg", fahrenheit: true },
                { id: 4553433, nameInURL: "tulsa", imageURL: "https://az616578.vo.msecnd.net/files/2016/04/20/6359678506567919951324778400_tulsa_image-", fahrenheit: true }], // {id, displayNameForUrl, imageURL}
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
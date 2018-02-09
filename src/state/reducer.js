import { RECEIVED_CITY_WEATHER, REQUEST_CITY_WEATHER, TOGGLE_FAHRENHEIT, ADD_CITY, REQUESTING_TO_ADD_CITY } from './action';

const initialState = {
    weatherLoadingStatus: "",
    addingCityStatus: "",
    locations: [{ id: 1689431, nameInURL: "sanjose", imageURL: "https://i.ytimg.com/vi/car6ehhepxw/maxresdefault.jpg", fahrenheit: true },
    { id: 5331835, nameInURL: "burbank", imageURL: "http://www.aandamoving.com/wp-content/uploads/2015/06/mover-burbank-ca.jpg", fahrenheit: true },
    { id: 4684888, nameInURL: "dallas", imageURL: "https://www.animationcareerreview.com/files/styles/large/public/images/articles/dallas.jpg", fahrenheit: true },
    { id: 4887398, nameInURL: "chicago", imageURL: "https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/chicago/01-city-landing/Chicago-Skyline-Big-Bus-Tours-March-2017.jpg", fahrenheit: true },
    { id: 4553433, nameInURL: "tulsa", imageURL: "https://az616578.vo.msecnd.net/files/2016/04/20/6359678506567919951324778400_tulsa_image-1.jpg", fahrenheit: true },
    { id: 5809844, nameInURL: "seattle", imageURL: "https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2015/10/11-Great-Flexible-Jobs-in-Seattle-Washington-Hiring-Now.jpg", fafahrenheit: true },
    { id: 4366164, nameInURL: "washington", imageURL: "https://kids.nationalgeographic.com/content/dam/kids/photos/States/O-W/washington-dc-capitol.ngsversion.1435610747994.jpg", fahrenheit: true }], // {id, displayNameForUrl, imageURL}
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
            return { ...state, locations: state.locations.concat([action.payload]), addingCityStatus: "success" }

        default:
            return state;
    }
}

export default reducer;
// Importing action types
import * as actionTypes from './actionType';

// Initial state for the reducer
const initialState = {
    // Array to store weather data
    weatherData: [],
    // Array to store forecast data
    forecastData: [],
    // Boolean flag indicating whether weather data is currently being fetched
    isLoading: false,
    // Boolean flag indicating if an error occurred while fetching weather data
    isError: false,
    // Boolean flag indicating whether forecast data is currently being fetched
    forecastIsLoading: false,
    // Boolean flag indicating if an error occurred while fetching forecast data
    forecastIsError: false,
};

// Reducer function to handle state updates based on dispatched actions
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // Action type to indicate the initiation of weather data API request
        case actionTypes.GET_WEATHER_API_REQUEST:
            return { ...state, isLoading: true, isError: false };
        // Action type for successful retrieval of weather data from API
        case actionTypes.GET_WEATHER_API_SUCCESS:
            return { ...state, weatherData: payload, isLoading: false, isError: false };
        // Action type for failed weather data API request
        case actionTypes.GET_WEATHER_API_FAILURE:
            return { ...state, isLoading: false, isError: true };
        // Action type to indicate the initiation of forecast data API request
        case actionTypes.GET_FORECAST_API_REQUEST:
            return { ...state, forecastIsLoading: true, forecastIsError: false };
        // Action type for successful retrieval of forecast data from API
        case actionTypes.GET_FORECAST_API_SUCCESS:
            return { ...state, forecastData: payload, forecastIsLoading: false, forecastIsError: false };
        // Action type for failed forecast data API request
        case actionTypes.GET_FORECAST_API_FAILURE:
            return { ...state, forecastIsLoading: false, forecastIsError: true };
        // Default case to return current state if action type is not recognized
        default:
            return state;
    }
};

// Exporting the reducer function
export default reducer;

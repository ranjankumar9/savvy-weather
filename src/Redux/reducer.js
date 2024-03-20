import * as actionTypes from './actionType';

const initialState = {
    weatherData: [],
    forecastData: [],
    isLoading: false,
    isError: false,
    forecastIsLoading: false,
    forecastIsError: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_WEATHER_API_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case actionTypes.GET_WEATHER_API_SUCCESS:
            return { ...state, weatherData: payload, isLoading: false, isError: false };
        case actionTypes.GET_WEATHER_API_FAILURE:
            return { ...state, isLoading: false, isError: true };
        case actionTypes.GET_FORECAST_API_REQUEST:
            return { ...state, forecastIsLoading: true, forecastIsError: false };
        case actionTypes.GET_FORECAST_API_SUCCESS:
            return { ...state, forecastData: payload, forecastIsLoading: false, forecastIsError: false };
        case actionTypes.GET_FORECAST_API_FAILURE:
            return { ...state, forecastIsLoading: false, forecastIsError: true };
        default:
            return state;
    }
};

export default reducer;

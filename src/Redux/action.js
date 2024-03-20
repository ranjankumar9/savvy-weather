import axios from 'axios';
import * as actionTypes from './actionType';

// Action creator for initiating weather API request
const getWeatherApiRequest = () => ({ 
    type: actionTypes.GET_WEATHER_API_REQUEST
});

// Action creator for successful weather API response
const getWeatherApiSuccess = (payload) => ({ 
    type: actionTypes.GET_WEATHER_API_SUCCESS, payload 
});

// Action creator for failed weather API request
const getWeatherApiFailure = () => ({ 
    type: actionTypes.GET_WEATHER_API_FAILURE
});

// Action creator for initiating forecast API request
const getForecastApiRequest = () => ({ 
    type: actionTypes.GET_FORECAST_API_REQUEST
});

// Action creator for successful forecast API response
const getForecastApiSuccess = (payload) => ({ 
    type: actionTypes.GET_FORECAST_API_SUCCESS, payload 
});

// Action creator for failed forecast API request
const getForecastApiFailure = () => ({ 
    type: actionTypes.GET_FORECAST_API_FAILURE
});

// Thunk action creator for fetching weather and forecast data from APIs
export const fetchWeatherAndForecastData = (cityName) => async (dispatch) => {
    // Dispatching actions to indicate the initiation of API requests
    dispatch(getWeatherApiRequest());
    dispatch(getForecastApiRequest());
    try {
        // Making asynchronous requests to fetch weather and forecast data
        const weatherResponse = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=8ff6b1c427824112b02b9f92f1485bbb&include=minutely`);
        const forecastResponse = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=8ff6b1c427824112b02b9f92f1485bbb`);

        // Checking if both requests were successful
        if (weatherResponse.status >= 200 && weatherResponse.status < 300 &&
            forecastResponse.status >= 200 && forecastResponse.status < 300) {
            // Dispatching success actions with retrieved data
            dispatch(getWeatherApiSuccess(weatherResponse.data));
            dispatch(getForecastApiSuccess(forecastResponse.data));
        } else {
            // Throwing an error if any of the requests failed
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        // Handling errors if any occurred during API requests
        console.error('Error fetching weather and forecast data:', error);
        // Dispatching failure actions
        dispatch(getWeatherApiFailure());
        dispatch(getForecastApiFailure());
    }
};

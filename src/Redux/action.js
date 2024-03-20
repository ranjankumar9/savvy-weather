import axios from 'axios';
import * as actionTypes from './actionType';

const getWeatherApiRequest = () => ({ 
    type: actionTypes.GET_WEATHER_API_REQUEST
});

const getWeatherApiSuccess = (payload) => ({ 
    type: actionTypes.GET_WEATHER_API_SUCCESS, payload 
});

const getWeatherApiFailure = () => ({ 
    type: actionTypes.GET_WEATHER_API_FAILURE
});

const getForecastApiRequest = () => ({ 
    type: actionTypes.GET_FORECAST_API_REQUEST
});

const getForecastApiSuccess = (payload) => ({ 
    type: actionTypes.GET_FORECAST_API_SUCCESS, payload 
});

const getForecastApiFailure = () => ({ 
    type: actionTypes.GET_FORECAST_API_FAILURE
});

export const fetchWeatherAndForecastData = (cityName) => async (dispatch) => {
    dispatch(getWeatherApiRequest());
    dispatch(getForecastApiRequest());
    try {
        const weatherResponse = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=8ff6b1c427824112b02b9f92f1485bbb&include=minutely`);
        const forecastResponse = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=8ff6b1c427824112b02b9f92f1485bbb`);

        if (weatherResponse.status >= 200 && weatherResponse.status < 300 &&
            forecastResponse.status >= 200 && forecastResponse.status < 300) {
            dispatch(getWeatherApiSuccess(weatherResponse.data));
            dispatch(getForecastApiSuccess(forecastResponse.data));
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error fetching weather and forecast data:', error);
        dispatch(getWeatherApiFailure());
        dispatch(getForecastApiFailure());
    }
};
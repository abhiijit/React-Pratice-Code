import { FETCH_WEATHER_LOADING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from "./Constant";

export const fetchWeatherLoading = () => ({
    type: FETCH_WEATHER_LOADING
})

export const fetchWeatherSuccess = (data) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data
})

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error
})

let apiKey = "c87c30597f48494a8a765602250801"

export const fetchWeatherData = (city) => {
    return async(dispatch) =>{
        dispatch(fetchWeatherLoading());
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
            const data = await response.json();
            if(response.ok){
            dispatch(fetchWeatherSuccess(data))
            } else {
                dispatch(fetchWeatherFailure(data.error.message))
            }
        } catch (error) {
            dispatch(fetchWeatherFailure("Network Error"))
        }
    }
}
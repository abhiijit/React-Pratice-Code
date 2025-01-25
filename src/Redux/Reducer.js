import {
  FETCH_WEATHER_LOADING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from "./Constant";

const initialState = {
  loading: false,
  error: null,
  weatherData: [],
};

const fetchWeatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: [...state.weatherData, action.payload],
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchWeatherDataReducer;

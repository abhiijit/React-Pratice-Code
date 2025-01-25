import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchWeatherData} from '../../Redux/Action';
import {
    Card,
    CardContent,
    Typography,
    Grid ,
    Box,
    Alert,
    CircularProgress,
  } from "@mui/material";

const Weather = () => {
    const dispatch = useDispatch();
    const {loading, error, weatherData} = useSelector((state) => state.weather)
    const handleCityName = () => {
        let cityName = prompt("Enter the name of the city:");
        if(cityName && cityName.trim()){
            dispatch(fetchWeatherData(cityName))
        }
    }

    console.log(weatherData)
  return (
    <>
    <Box sx={{ padding: 2 }}>
        {error && <Alert severity="error">{error}</Alert>} {/* Display error */}
        <Grid container spacing={3}>
          {weatherData?.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#e3f2fd",
                  borderRadius: 3,
                  boxShadow: 1,
                  textAlign: "center",
                }}
              >
                <CardContent>
                  <img
                    src={
                      data.current?.condition.icon
                        ? `https:${data.current?.condition.icon}`
                        : "fallback-image-url"
                    }
                    alt={data.current?.condition.text || "Weather Icon"}
                    style={{ width: "50px", height: "50px", margin: "10px 0" }}
                  />
                  <Typography variant="h5">{data.location.name}</Typography>
                  <Typography variant="span">
                    {data.location.localtime}
                  </Typography>
                  <Typography variant="h6">{data.current.temp_c}°C</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {data.current.condition.text}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 1,
                    }}
                  >
                    <Typography variant="body2">
                      Humidity: {data.current.humidity}%
                    </Typography>
                    |
                    <Typography variant="body2">
                      Visibility: {data.current.vis_km} km
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 1,
                    }}
                  >
                    <Typography variant="body2">
                      Feels Like: {data.current.feelslike_c}°C
                    </Typography>
                    |
                    <Typography variant="body2">
                      Wind: {data.current.wind_kph} km/h
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {loading && <CircularProgress />} {/* Show loading spinner */}
          <Grid  item xs={12} sm={6} md={4} lg={2}>
            <Card
              sx={{
                border: "2px solid #90caf9",
                borderRadius: 3,
                boxShadow: "none",
                textAlign: "center",
                cursor: "pointer",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleCityName}
            >
              <Typography variant="h6" color="primary">
                + Add New Location
              </Typography>
            </Card>
          </Grid >
        </Grid >
      </Box>
    </>
  )
}

export default Weather
import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAndForecastData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const WeatherBox = () => {
  // State to hold the value of the search input
  const [searchValue, setSearchValue] = useState("");
  // Redux dispatcher for dispatching actions
  const dispatch = useDispatch();
  // Hook for navigating between pages
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if search value is empty
    if (!searchValue) {
      // Display error toast if search value is empty
      return toast.error("Please input city/country name.", { duration: 2000 });
    }
    // Dispatch action to fetch weather and forecast data based on search value
    dispatch(fetchWeatherAndForecastData(searchValue)).then(() => {
      // Navigate to weather details page after data is fetched
      navigate('/weather-details');
    });
    // Clear the search input after submission
    setSearchValue("");
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingX={2}
    >
      <Box width="100%" maxWidth="600px">
        {/* Title */}
        <Typography
          variant="h2"
          component="h2"
          mt={5}
          color={"yellow"}
          textAlign="center"
          fontFamily={"-moz-initial"}
        >
          Weather Forecast
        </Typography>
        {/* Search form */}
        <Box mt={{ xs: 5, md: 20, lg: 20 }}>
          <form onSubmit={handleSubmit}>
            {/* Search input field */}
            <TextField
              placeholder="Enter City Name"
              InputProps={{
                style: {
                  color: "white",
                  letterSpacing: "2px",
                },
              }}
              color="primary"
              focused
              value={searchValue}
              onChange={(obj) => setSearchValue(obj.target.value)}
              fullWidth
              autoFocus
            />
            {/* Submit button */}
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              mt={3}
            >
              <Button
                sx={{
                  fontSize: "20px",
                  color: "white",
                  border: "1px solid white",
                  textTransform: "none",
                  letterSpacing: "2px",
                  width: "100%",
                  maxWidth: "200px",
                }}
                type="submit"
              >
                Get Weather
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherBox;

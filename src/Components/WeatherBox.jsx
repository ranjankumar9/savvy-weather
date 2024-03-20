import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAndForecastData } from "../Redux/action";
import { useNavigate } from "react-router-dom";

const WeatherBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return toast.error("Please input city/country name.", { duration: 2000 });
    }
    dispatch(fetchWeatherAndForecastData(searchValue)).then(() => {
        navigate('/weather-details')
     
    })
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
        <Box mt={{ xs: 5, md: 20, lg: 20 }}>
          <form onSubmit={handleSubmit}>
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

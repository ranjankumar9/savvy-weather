import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "./Card";

const WeatherForecast = () => {
  const weather = useSelector((state) => state);
  console.log(weather);

  return (
    <Box display="flex" height={"auto"} gap={4}>
      {weather?.isLoading ? (
        <Box>
          <Avatar src="https://i.gifer.com/ZKZg.gif" />
        </Box>
      ):(
        <Box  display="flex" alignItems={'center' } gap={3} height={"90%"} >
        {weather?.forecastData?.data?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        </Box>
      )}
    </Box>
  );
};

export default WeatherForecast;

import React from "react";
import { Avatar, Box } from "@mui/material"; // Importing Avatar and Box components from MUI
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux
import Card from "./Card"; // Importing Card component

const WeatherForecast = () => {
  // Accessing weather data from Redux store
  const weather = useSelector((state) => state);
  console.log(weather); // Logging weather data to the console

  return (
    <Box display="flex" height={"auto"} gap={4}>
      {/* Conditional rendering based on loading state */}
      {weather?.isLoading ? ( // If loading is true
        <Box>
          <Avatar src="https://i.gifer.com/ZKZg.gif" /> {/* Displaying loading spinner */}
        </Box>
      ) : ( // If loading is false
        <Box display="flex" alignItems="center" gap={3} height={"90%"}>
          {/* Mapping through forecast data and rendering Card component for each item */}
          {weather?.forecastData?.data?.map((item, index) => (
            <Card key={index} item={item} /> // Rendering Card component with item data
          ))}
        </Box>
      )}
    </Box>
  );
};

export default WeatherForecast; // Exporting WeatherForecast component

import React from "react";
import moment from "moment"; // Importing moment library for date formatting
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

// WeatherCard component takes 'item' as prop which contains weather data for a specific day
const WeatherCard = ({ item }) => {
  // Extracting valid_date from item
  const itemDate = item?.valid_date;
  // Formatting the date to display the day name (e.g., Monday, Tuesday)
  const dayName = moment(itemDate).format("dddd");

  return (
    // Card component to display weather information
    <Card sx={{ backgroundColor: 'transparent', width: "160px", height: '100%', display: 'flex', flexDirection: 'column' }} >
      <CardContent style={{ flex: 1 }}> {/* Content section of the card */}
        {/* Displaying the day name */}
        <Typography variant="subtitle1" color="textSecondary" textAlign={'center'} gutterBottom>
          {item?.valid_date ? dayName : null}
        </Typography>
        {/* Displaying weather icon */}
        <CardMedia
          component="img"
          height="90"
          width="90" 
          image={`https://cdn.weatherbit.io/static/img/icons/${item?.weather?.icon}.png`}
          alt={item?.weather?.description}
          title={item?.weather?.description}
          style={{ margin: 'auto' }} // Centering the image
        />
        {/* Displaying weather description */}
        <Typography variant="subtitle1" color="textSecondary" textAlign={'center'}>
          {item?.weather?.description}
        </Typography>
        {/* Displaying temperature */}
        <Typography variant="h5" textAlign={'center'} component="h2">
          {item?.temp}°
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

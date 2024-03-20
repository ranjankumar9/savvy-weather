import React from "react";
import moment from "moment";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const WeatherCard = ({ item }) => {
  const itemDate = item?.valid_date;
  const dayName = moment(itemDate).format("dddd");

  return (
    <Card sx={{ backgroundColor: 'transparent', width: "160px", height: '100%', display: 'flex', flexDirection: 'column' }} >
      <CardContent style={{ flex: 1 }}>
        <Typography variant="subtitle1" color="textSecondary" textAlign={'center'} gutterBottom>
          {item?.valid_date ? dayName : null}
        </Typography>
        <CardMedia
          component="img"
          height="90"
          width="90" 
          image={`https://cdn.weatherbit.io/static/img/icons/${item?.weather?.icon}.png`}
          alt={item?.weather?.description}
          title={item?.weather?.description}
          style={{ margin: 'auto' }}
        />
        <Typography variant="subtitle1" color="textSecondary" textAlign={'center'}>
          {item?.weather?.description}
        </Typography>
        <Typography variant="h5" textAlign={'center'} component="h2">
          {item?.temp}°
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

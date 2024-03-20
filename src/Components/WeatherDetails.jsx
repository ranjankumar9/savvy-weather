import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid, Typography, Box, Tooltip, IconButton } from "@mui/material";
import { ImLocation2 } from "react-icons/im";
import WeatherForecast from "./WeatherForecast";
import { useSelector } from "react-redux";
import backgroundimg from "../assets/natures.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export default function WeatherDetails() {
  // Hook for navigating between pages
  const navigate = useNavigate();
  
  // Accessing weather data from Redux store
  const weather = useSelector((state) => state);
  console.log(weather);

  // Function to get current day and date
  const getCurrentDayAndDate = () => {
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
    const date = currentDate.getDate();
    const suffix =
      date === 1 || date === 21 || date === 31
        ? "st"
        : date === 2 || date === 22
        ? "nd"
        : date === 3 || date === 23
        ? "rd"
        : "th";
    return (
      <Typography variant="h6" component="span" display="inline">
        {day}{" "}
        <Typography variant="h6" component="span" display="inline">
          {date}
        </Typography>
        <sup style={{ fontSize: "smaller" }}>{suffix.toLowerCase()}</sup>
      </Typography>
    );
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    navigate("/");
  };
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Back button */}
      <Tooltip title="Back">
        <IconButton>
          <Button
            onClick={handleCancel}
            sx={{ cursor: "pointer", fontSize: "50px", color: "white" }}
          >
            <ArrowCircleLeftIcon fontSize="10px" />
          </Button>
        </IconButton>
      </Tooltip>

      <Grid
        width={"90%"}
        sx={{
          color: "white",
        }}
      >
        {weather?.weatherData?.data?.map((item, index) => {
          return (
            <Grid key={index} width={"100%"}>
              {/* Weather details */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"end"}
                sx={{
                  backgroundImage: `url(${backgroundimg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px",
                  filter: "brightness(90%)",
                  zIndex: -1,
                }}
              >
                <Box
                  display="grid"
                  alignItems="center"
                  justifyContent="start"
                  width="100%"
                  color={"yellow"}
                  paddingLeft={4}
                >
                  {/* Location */}
                  <Typography fontSize={30} textAlign={"center"}>
                    <ImLocation2 />
                  </Typography>
                  <Typography variant="p" textAlign={"right"} fontSize={"20px"}>
                    {item?.city_name}, {item?.country_code}
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                height={"100%"}
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box borderRight={"1px solid grey"} p={2}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"20px"}
                    height={"100%"}
                    width={"100%"}
                  >
                    {/* Temperature, Icon, Day, Date */}
                    <Grid
                      alignItems={"center"}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Typography variant="h2">{item?.temp}°</Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          fontSize: "10px",
                          minWidth: "10px",
                          padding: "4px",
                        }}
                      >
                        {getCurrentDayAndDate()}
                      </Button>
                    </Grid>
                    <Grid
                      display={"flex"}
                      alignItems={"center"}
                      flexDirection={"column"}
                    >
                      <img
                        width={80}
                        src={`https://cdn.weatherbit.io/static/img/icons/${item?.weather?.icon}.png`}
                        alt={item?.weather?.description}
                        title={item?.weather?.description}
                      />
                      <Typography variant="body1" textAlign={"center"}>
                        {item?.wind_spd}mph /
                        {item?.app_temp}°
                      </Typography>
                    </Grid>
                  </Box>

                  {/* Weather description */}
                  <Typography variant="body1" textAlign={"center"} mt={2}>
                    {item?.weather?.description}
                  </Typography>
                </Box>
                {/* Weather forecast */}
                <Box width={"100%"} sx={{ overflowX: "auto" }}>
                  <WeatherForecast />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WeatherBox from '../Components/WeatherBox'
import WeatherDetails from '../Components/WeatherDetails'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' Component={WeatherBox} />
    <Route path='/weather-details' Component={WeatherDetails} />
   </Routes>
  )
}

export default MainRoutes;
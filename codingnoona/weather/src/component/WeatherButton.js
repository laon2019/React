import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, handelCityChange, selectedCity}) => {
  
  return (
    <div>
        <Button variant={`${selectedCity == null?"outline-warning":"warning"}`} onClick={()=>handelCityChange("current")}>Current Location</Button>
        {cities.map((city, index)=>(
          <Button variant={`${selectedCity == city?"outline-warning":"warning"}`} key={index} onClick={()=>handelCityChange(city)}>{city}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
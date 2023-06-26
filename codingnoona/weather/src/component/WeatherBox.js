import React from 'react'

const WeatherBox = ({weather}) => {
    let celsius = weather?.main?.temp;
    const celsiusToFahrenheit = (celsius) =>{
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }
    let fahrenheit = celsiusToFahrenheit(celsius);
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{Math.round(weather?.main?.temp)}도 /{(Math.round(fahrenheit))}화씨</h2>
        <h3>{weather?.weather?.[0]?.description}</h3>
    </div>
  )
}

export default WeatherBox
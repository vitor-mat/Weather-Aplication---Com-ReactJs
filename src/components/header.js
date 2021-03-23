import React, { useState } from 'react'
import '../style/header.css'
const axios = require("axios")


export default function (props){
    let [city, setCity] = useState("")
    let [country, setCountry] = useState("")
    let [description, setDescription] = useState("")
    let [temperature, setTemperature] = useState("")
    let [humidity, setHumidity] = useState("")
    let [pressure, setPressure] = useState("")
    let [lat, setLat] = useState("")
    let [long, setLong] = useState("")

    async function getWeather(name){
        const key = "523496410ae3af7e2edb43a6fef6b35d"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&lang=pt`

        try{
            const requisition = await axios(url)
            const data = await requisition.data   

            const weatherData = await {
                name: data.name,
                country: data.sys.country,
                description: data.weather[0].description,
                lat: data.coord.lat,
                long: data.coord.lon,
                temperature: Number(data.main.temp - 273.15).toFixed(2),
                humidity: data.main.humidity,
                pressure: data.main.pressure
            }

            await console.log(data)

            await setCity(city)
            await setCountry(country = weatherData.country)
            await setDescription(description = weatherData.description)
            await setTemperature(temperature = `${weatherData.temperature}°`)
            await setHumidity(humidity = `${weatherData.humidity}%`)
            await setPressure(pressure = `${weatherData.pressure}hPa`)
            await setLat(lat = weatherData.lat)
            await setLong(long = weatherData.long)

            
            await props.newCity(changeCity())
            await props.newCountry(country)
            await props.newDescription(description)
            await props.newTemperature(temperature)
            await props.newHumidity(humidity)
            await props.newPressure(pressure)
            await props.newLat(lat)
            await props.newLong(long)

            return true
        }catch (error){
            await setCountry(country = `ERRO`)
            await setCity(city = "Nome Inválido!")
            await setDescription(description = "")
            await setTemperature(temperature = "")
            await setHumidity(humidity = "")
            await setPressure(pressure = ``)
            await setLat(lat = "")
            await setLong(long = "")
            
            await props.newCity(changeCity())
            await props.newCountry(country)
            await props.newDescription(description)
            await props.newTemperature(temperature)
            await props.newHumidity(humidity)
            await props.newPressure(pressure)
            await props.newLat(lat)
            await props.newLong(long)

            console.error(error)
        }

    }

    const getCity = (e) => {
        city = e.target.value
        return city
    }

    function changeCity() {
        setCity(city)
        return city
    }

    return(
        <header>
            <input type="text" placeholder="TYPE NAME OF CITY" onChange={getCity}/>
            <button onClick = {() => {
                getWeather(city)
            }}>SEARCH</button>
        </header>
    )
}
import React, { useState } from 'react';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer'
import "./../style/app.css"

export default function() {

    let [cityFromHeader, setCityFromHeader] = useState("")
    let [countryFromHeader, setCountryFromHeader] = useState("")
    let [descriptionFromHeader, setDescriptionFromHeader] = useState("")
    let [temperatureFromHeader, setTemperatureFromHeader] = useState("0º")
    let [humidityFromHeader, setHumidityFromHeader] = useState("0hPa")
    let [pressureFromHeader, setPressureFromHeader] = useState("0%")
    let [latFromHeader, setLatFromHeader] = useState("0")
    let [longFromHeader, setLongFromHeader] = useState("0")


    function getCity(value){
        setCityFromHeader(cityFromHeader = value)
        return cityFromHeader
    }

    function getCountry(value){
        setCountryFromHeader(countryFromHeader = value)
        return countryFromHeader
    }

    function getDescription(value){
        setDescriptionFromHeader(descriptionFromHeader = value)
        return descriptionFromHeader
    }

    function getTemperature(value){
        setTemperatureFromHeader(temperatureFromHeader = value)
        return temperatureFromHeader
    }

    function getHumidity(value){
        setHumidityFromHeader(humidityFromHeader = value)
        return humidityFromHeader
    }

    function getPressure(value){
        setPressureFromHeader(pressureFromHeader = value)
        return pressureFromHeader
    }

    function getLat(value){
        setLatFromHeader(latFromHeader = value)
        return latFromHeader
    }

    function getLong(value){
        setLongFromHeader(longFromHeader = value)
        return longFromHeader
    }



    return(
        <>
            <Header newCity={getCity} newCountry={getCountry} 
            newDescription={getDescription} newTemperature={getTemperature} 
            newHumidity={getHumidity} newPressure={getPressure}
            newLat={getLat} newLong={getLong}/>

            <Main cityFromApp={cityFromHeader} countryFromApp={countryFromHeader} 
            descriptionFromApp={descriptionFromHeader} 
            temperatureFromApp={temperatureFromHeader} 
            humidityFromApp={humidityFromHeader} pressureFromApp={pressureFromHeader}
            latFromApp={latFromHeader} longFromApp={longFromHeader}/>

            <Footer />
        </>
    )
}
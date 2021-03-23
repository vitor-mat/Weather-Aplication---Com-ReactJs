import React from 'react'
import "../style/main.css"
import Card from './card'

export default function(props){
    return(
        <main>
            <Card cityFromMain={props.cityFromApp} countryFromMain={props.countryFromApp} 
            descriptionFromMain={props.descriptionFromApp} 
            temperatureFromMain={props.temperatureFromApp} 
            humidityFromMain={props.humidityFromApp} 
            pressureFromMain={props.pressureFromApp}
            latFromMain={props.latFromApp} longFromMain={props.longFromApp}/>
        </main>
    )
}
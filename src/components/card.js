import React from 'react'
import '../style/card.css'
import Tables from "./cards/tables"
import Temperatures from "./cards/temperatures"
import Coordinates from "./cards/coordinates"
import Names from "./cards/names"

export default function (props){
    return(
        <div id="card">
            <Names cityFromCard={props.cityFromMain} 
            countryFromCard={props.countryFromMain}/>
            <div id="dados">
                <Tables humidityFromCard={props.humidityFromMain} 
                pressureFromCard={props.pressureFromMain}/>
                <Temperatures descriptionFromCard={props.descriptionFromMain} 
                temperatureFromCard={props.temperatureFromMain}/>
                <Coordinates latFromCard={props.latFromMain} 
                longFromCard={props.longFromMain}/>
            </div>
        </div>
    )
}

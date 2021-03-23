import React from 'react';
import HighTemperature from '../../images/main/card/high-temperature-image.png'
import LowTemperature from '../../images/main/card/low-temperature-image.png'
import "../../style/cards/temperatures.css"

export default function(props) {
    const description = props.descriptionFromCard
    const temperature = props.temperatureFromCard

    const temperatureNumber = Number(temperature.slice(0,5))

    if(temperatureNumber > 20){
        console.log(temperatureNumber)
        return(
            <div id="temperatures-div">
                <span>{temperature}<img src={HighTemperature}/></span>
                <span>{description}</span>
            </div>
            )
    }else{
        return(
            <div id="temperatures-div">
                <span>{temperature}<img src={LowTemperature}/></span>
                <span>{description}</span>
            </div>
            )
    }
}
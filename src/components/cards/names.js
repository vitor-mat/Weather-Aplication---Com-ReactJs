import React from 'react'
import '../../style/cards/names.css'



export default function(props){
    const city = props.cityFromCard
    const country = props.countryFromCard

    return(
        <div id="name">
        <span>{city}</span>
        <span>{country}</span>
        </div>
    )
}
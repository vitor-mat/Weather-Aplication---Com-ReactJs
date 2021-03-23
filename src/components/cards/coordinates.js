import React from 'react';
import "../../style/cards/coordinates.css"

export default function(props) {
        const lat = props.latFromCard
        const long = props.longFromCard

        return(
        <div id="coordinates-div">
           <span> Lat: {lat}</span>  <span>Long: {long}</span>
        </div>
        )
}
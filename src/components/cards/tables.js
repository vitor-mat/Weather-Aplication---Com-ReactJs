import React from 'react';
import "../../style/cards/tables.css"

export default function(props) {
        const humidity = props.humidityFromCard
        const pressure = props.pressureFromCard

        return(
            <div id="table-div">
            <table>
                <thead>
                <tr>
                    <th>Umidade</th>
                    <th>Pressão</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{humidity}</td>
                    <td>{pressure}</td>
                </tr>
                </tbody>
            </table>
        </div>
        )
}
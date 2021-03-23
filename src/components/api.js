const axios = require("axios")

const key = "523496410ae3af7e2edb43a6fef6b35d"
const name = "Petrolândia"

const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}&lang=pt`



async function getContent(){
    try{
        const requisition = await axios(url)
        const data = requisition.data
        console.log(data)

        const weather = {
            name: data.name,
            country: data.sys.country,
            descrição: data.weather[0].description,
            latitude: data.coord.lat,
            longitude: data.coord.lon,
            temperatura: data.main.temp - 273.15
        }

        return weather
    }catch (error){
        console.error(error)
    }
}

export default getContent()
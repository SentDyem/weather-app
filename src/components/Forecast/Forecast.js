import React, { useState } from "react";


const Forecast = () =>
{
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/find?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "917aebba3emshc8230717cf29341p17b21bjsnb638d099d13f"
            }
        })
            .then(response => response.json())
            .then(response => {setResponseObj(response)})
            .catch(err => {
                console.log(err);
            });




    };
    return (
        <div>
            <h2>Узнать погоду</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Узнать погоду</button>
        </div>
    );
};
export default Forecast;
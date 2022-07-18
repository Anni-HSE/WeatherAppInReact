import React, { useState } from 'react'
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let [cityId, setCityId] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(cityId);

    function getForecast(e) {
        e.preventDefault();

        if (cityId.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObj({});

        setLoading(true);

        let uriEncodedCityId = encodeURIComponent(cityId);


        fetch("http://localhost:8080/weather/forecast="+ cityId, {
            "method": "GET"
        })
            .then(response => response.json())
            .then(response => {
                if (response.cod !== 200) {
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter CityId"
                    maxLength="50"
                    className={classes.textInput}
                    onChange={(e) => setCityId(e.target.value)}
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            <Conditions
                responseObj={responseObj}
                error={error} //new
                loading={loading}
            />
        </div>
    )
}

export default Forecast;
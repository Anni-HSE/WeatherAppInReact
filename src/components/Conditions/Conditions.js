import React from 'react';
import classes from './Conditions.module.css'

const Conditions = (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small>Please enter a valid cityId.</small>}

            {props.loading && <div>Loading...</div>}

            {
                <div>
                    <p><strong>{props.responseObj.city}</strong></p>
                    <p>It is currently {Math.round(props.responseObj.temp)} degrees out with {props.responseObj.description}.</p>
                    <p>Wind speed = {props.responseObj.windSpeed}.</p>
                </div>
            }
        </div>
    )
}
export default Conditions;
import React from 'react';
import classes from './DataView.module.css'

const DataView = (props) => {

    let res = props.responseObj.length > 0 ? props.responseObj.map(function(item) {
        return <tr key={item.id}>
            <td>{item.city}</td>
            <td>{item.country}</td>
            <td>{item.temp}</td>
            <td>{item.windSpeed}</td>
            <td>{item.description}</td>
        </tr>;
    }) : [];


    return(
        <div className={classes.Wrapper}>
            {props.responseObj.length != 0 ?
                <table>
                    <thead>
                        <tr>
                            <td>City</td>
                            <td>Country</td>
                            <td>Temp</td>
                            <td>WindSpeed</td>
                            <td>Weather</td>
                        </tr>
                    </thead>
                    <tbody contenteditable="true">
                        {res}
                    </tbody>
                </table>
             : null
            }
        </div>

    );
}

export default DataView;
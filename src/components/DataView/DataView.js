import React from 'react';

const DataView = (props) => {
    return(
        <div>
            {props.responseObj.map(function (item){
                <p key={item.id}>
                    <span>{item.city}</span>
                    <span>{item.country}</span>
                    <span>{item.temp}</span>
                    <span>{item.temp_max}</span>
                    <span>{item.temp_min}</span>
                    <span>{item.wind_speed}</span>
                </p>
                })
            }
        </div>
    );
}

export default DataView;
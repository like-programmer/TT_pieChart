import React from "react";


const Input = (props) => {
    const {data} = props;
    const capitalizedLabelName = `${data[0].substr(0, 1).toUpperCase()}${data[0].slice(1)}`;

    return (
        <div className="input-container">
            <label className="input-container__label">{capitalizedLabelName}</label>
            <input type="text" className="input-container__input"
                   defaultValue={data[1]}
            />
        </div>
    );
};


export default Input;

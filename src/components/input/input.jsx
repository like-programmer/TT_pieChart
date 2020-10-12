import React from "react";


const Input = (props) => {
    const {
        data,
        text,
        onValueChange,
    } = props;
    const capitalizedLabelName = `${data[0].substr(0, 1).toUpperCase()}${data[0].slice(1)}`;

    return (
        <div className="input-container">
            <label className="input-container__label">{capitalizedLabelName}</label>
            <input type="text" className="input-container__input"
                   value={text}
                   onChange={onValueChange}
            />
        </div>
    );
};


export default Input;

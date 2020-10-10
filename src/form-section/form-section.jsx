import React from "react";


const FormSection = () => {
    return (
        <div className="form__section">
            <div className="input-container">
                <label className="input-container__label">Title</label>
                <input type="text" className="input-container__input"/>
            </div>

            <div className="input-container">
                <label className="input-container__label">Amount</label>
                <input type="text" className="input-container__input"/>
            </div>

            <button type="button" className="btn-delete">Delete row</button>
        </div>
    );
};


export default FormSection;

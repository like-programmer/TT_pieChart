import React from "react";
import FormSection from '../form-section/form-section.jsx';


const Form = () => {
    return (
        <div className="page-wrapper">
            <form action="" className="form">

                <FormSection/>

                <button type="button" className="btn-add">+ Add row</button>

            </form>
        </div>
    );
};


export default Form;

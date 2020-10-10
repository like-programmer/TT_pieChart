import React from "react";
import FormSection from '../form-section/form-section.jsx';


const Form = (props) => {
    const usersData = props.data;

    return (
        <div className="page-wrapper">
            <form action="" className="form">

                {usersData.map((item, i) => {
                    return (
                        <FormSection
                        key={`${item.title}-${item.amount}-${i}`}
                        data={item}
                        isFirst={i === 0}
                        />
                    )
                })}

                <button type="button" className="btn-add">+ Add row</button>

            </form>
        </div>
    );
};


export default Form;

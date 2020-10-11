import React from "react";
import FormSection from '../form-section/form-section.jsx';


const Form = (props) => {
    const {
        userData,
        onAddRowBtnClick,
        onDeleteRowBtnClick,
        onClearRowBtnClick,
    } = props;

    // console.log(userData);

    return (
        <div className="page-wrapper">
            <form action="" className="form">

                {userData.map((item, i) => {
                    return (
                        <FormSection
                        key={`${i}-${item.title}-${item.amount}`}
                        data={item}
                        isFirst={i === 0}
                        onDeleteRowBtnClick={onDeleteRowBtnClick}
                        onClearRowBtnClick={onClearRowBtnClick}
                        />
                    )
                })}

                <button type="button" className="btn-add"
                onClick={(evt) => {
                    evt.preventDefault();
                    onAddRowBtnClick();
                }}
                >
                    + Add row
                </button>

            </form>
        </div>
    );
};


export default Form;

import React from "react";

const FormSection = (props) => {
    const {
        data,
        isFirst,
        onDeleteRowBtnClick,
        onClearRowBtnClick,

        title,
        amount,
        onTitleChange,
        onAmountChange,
    } = props;

    return (
        <div className="form__section">

            <div className="input-container">
                <label className="input-container__label">Title</label>
                <input type="text" className="input-container__input"
                       value={title}
                       onChange={onTitleChange}
                />
            </div>

            <div className="input-container">
                <label className="input-container__label">Amount</label>
                <input type="text" className="input-container__input"
                       value={amount}
                       onChange={onAmountChange}
                />
            </div>

            <button type="button" className="btn-clear"
                    onClick={(evt) => {
                        evt.preventDefault();
                        onClearRowBtnClick(data);
                    }}
             >
                Clear row
            </button>

            {isFirst ? `` :
                <button type="button" className="btn-delete"
                onClick={(evt) => {
                    evt.preventDefault();
                    onDeleteRowBtnClick(data);
                }}
                >
                    Delete row
                </button>
            }
        </div>
    );
};


export default FormSection;

import React from "react";
import Input from "../input/input.jsx";


const FormSection = (props) => {
    const {
        data,
        isFirst,
        onDeleteRowBtnClick,
        onClearRowBtnClick,
    } = props;

    return (
        <div className="form__section">

            {Object.entries(data).map((pair, i) => {
                if (pair[0] !== `color` && pair[0] !== `id`) {
                    return (
                        <Input
                        key={`${i}-${pair[0]}-${pair[1]}`}
                        data={pair}
                        />
                    );
                }
                return (``);
            })}

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

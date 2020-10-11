import React from "react";

const NavBtn = (props) => {
    const {
        title,
        isActive,
        onActivePageChange,
    } = props;

    return (
        <button
            className={`nav-btn ${isActive && `nav-btn--active`}`}
            type="button"
            onClick={(evt) => {
                evt.preventDefault();
                onActivePageChange(title);
            }}
        >
            {title}
        </button>
    );
};


export default NavBtn;

import React from "react";


const NavBtn = (props) => {
    const {title} = props;

    return (
        <button className="nav-btn" type="button">{title}</button>
    );
};


export default NavBtn;

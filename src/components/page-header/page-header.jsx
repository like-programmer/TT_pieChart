import React from "react";
import NavBtn from '../nav-btn/nav-btn.jsx';
import {PageNames} from '../../const.js';


const PageHeader = () => {
    return (
        <header className="page-header">

            {Object.values(PageNames).map((name, i) => {
                return (
                    <NavBtn
                    key={`${name}-${i}`}
                    title={name}
                    />
                )
            })}

        </header>
    );
};


export default PageHeader;

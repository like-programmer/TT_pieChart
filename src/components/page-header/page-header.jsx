import React from "react";
import NavBtn from '../nav-btn/nav-btn.jsx';
import {PageNames} from '../../const.js';


const PageHeader = (props) => {
    const {
        activePage,
        onActivePageChange,
    } = props;

    return (
        <header className="page-header">

            {Object.entries(PageNames).map((pair, i) => {
                return (
                    <NavBtn
                    key={`${i}-${pair[0]}`}
                    title={pair[1]}
                    isActive={activePage === pair[1]}
                    onActivePageChange={onActivePageChange}
                    />
                )
            })}

        </header>
    );
};


export default PageHeader;

import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PageHeader from '../page-header/page-header.jsx';
import {getTotalAmount, getNumbersInPersent, getOffset} from '../../utils.js';

const GraphPage = (props) => {
    const {
        userData,
        activePage,
        hoveredGraphArea,
        onActivePageChange,
        setHoveredArea,
    } = props;

    const totalAmount = getTotalAmount(userData);
    const numbersInPersent = getNumbersInPersent(userData);
    const hoveredPartInPersent = (hoveredGraphArea.amount / totalAmount * 100).toFixed(2);

    return (
        <Fragment>
            <PageHeader
                activePage={activePage}
                onActivePageChange={onActivePageChange}
            />

            <div className="page-wrapper">
                <div className="chart-container">
                    <div className="legend">
                        <div
                            className="legend__color"
                            style={{backgroundColor: hoveredGraphArea.color}}
                        />
                        {Object.values(hoveredGraphArea).length !== 0 ?
                            <p className="legend__title">{`${hoveredGraphArea.title}, ${hoveredGraphArea.amount} - ${hoveredPartInPersent}%`}</p>
                            : ``}
                    </div>

                    <svg className="chart" width="400" height="400" viewBox="0 0 50 50">

                        {userData.map((data, i) => {

                            const offset = getOffset(userData, i);

                            return (
                                <circle
                                    key={`${i}-${data.title}-${data.color}`}
                                    className="unit"
                                    r="15.9"
                                    cx="50%"
                                    cy="50%"
                                    style={{
                                        stroke: data.color,
                                        strokeDasharray: `${numbersInPersent[i]} 100`,
                                        strokeDashoffset: (offset === 0 ? `0` : `-${offset}`)
                                    }}
                                    onMouseEnter={() => setHoveredArea(data)}
                                    onMouseLeave={() => setHoveredArea({})}
                                />
                            )
                        })}
                    </svg>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    userData: state.userData,
    activePage: state.activePage,
    hoveredGraphArea: state.hoveredGraphArea,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onActivePageChange(pageName) {
            dispatch(ActionCreator.changeActivePage(pageName));
        },

        setHoveredArea(data) {
            dispatch(ActionCreator.setHoveredArea(data));
        }
    };
};


export {GraphPage};
export default connect(mapStateToProps, mapDispatchToProps)(GraphPage);

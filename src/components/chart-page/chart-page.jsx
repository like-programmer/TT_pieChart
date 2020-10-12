import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PageHeader from '../page-header/page-header.jsx';
import DonutChart from '../donut-chart/donut-chart.jsx';
import PieChart from '../pie-chart/pie-chart.jsx';

const ChartPage = (props) => {
    const {
        userData,
        activePage,
        hoveredGraphArea,
        onActivePageChange,
        setHoveredArea,
    } = props;

    const isData = Object.values(userData).map((item) => {
        return (item.title !== `` && item.amount !== ``) ? 1 : 0;
    }).reduce((accumulator, currentValue) => accumulator + currentValue);

    return (
        <Fragment>
            <PageHeader
                activePage={activePage}
                onActivePageChange={onActivePageChange}
            />

            <div className="page-wrapper">
                {
                    isData !== 0 &&
                    <div className="chart-container">
                        <DonutChart
                            userData={userData}
                            hoveredGraphArea={hoveredGraphArea}
                            setHoveredArea={setHoveredArea}
                        />

                        <PieChart
                            userData={userData}
                        />
                    </div>
                }
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


export {ChartPage};
export default connect(mapStateToProps, mapDispatchToProps)(ChartPage);

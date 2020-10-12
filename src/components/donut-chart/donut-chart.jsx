import React from "react";
import {getTotalAmount, getNumbersInPersent, getOffset} from '../../utils.js';

const DonutChart = (props) => {
    const {
        userData,
        hoveredGraphArea,
        setHoveredArea,
    } = props;

    const totalAmount = getTotalAmount(userData);
    const numbersInPersent = getNumbersInPersent(userData);
    const hoveredPartInPersent = parseInt((hoveredGraphArea.amount / totalAmount * 100), 10);

    return (
        <div className="donut-chart">
            <div className="legend">
                <div className="legend__color"
                     style={{backgroundColor: hoveredGraphArea.color}}
                />
                {Object.values(hoveredGraphArea).length !== 0 ?
                    <p className="legend__title">{`${hoveredGraphArea.title}, ${hoveredGraphArea.amount} - ${hoveredPartInPersent}%`}</p>
                    : ``}
            </div>

            <svg className="chart chart--donut" width="300" height="550" viewBox="0 0 50 50">

                {userData.map((data, i) => {
                    const offset = getOffset(userData, i);

                    return (
                        <circle
                            key={`donut-${i}-${data.title}-${data.color}`}
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
    );
};


export default DonutChart;

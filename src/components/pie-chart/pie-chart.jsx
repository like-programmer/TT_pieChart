import React, {Fragment} from "react";
import {getTotalAmount, getNumbersInPersent, getOffset} from '../../utils.js';

const ChartSettings = {
    RADIUS: 15.9,
    VIEWBOX_X: 126,
    VIEWBOX_Y: 126,
};

const SectorSettings = {
    CENTER_X: ChartSettings.VIEWBOX_X / 2,
    CENTER_Y: ChartSettings.VIEWBOX_Y / 2,
};

const TEXT_OFFSET = 30;
const degToRad = (angle) => angle * Math.PI / 180;
const PieChart = (props) => {
    const {
        userData,
    } = props;

    const totalAmount = getTotalAmount(userData);
    const numbersInPersent = getNumbersInPersent(userData);

    let curAngle = 0;

    return (
        <div className="pie-chart">
            <svg className="chart chart--pie" width="700" height="550" viewBox="0 0 126 126">

                {userData.map((data, i) => {
                    const offset = getOffset(userData, i);
                    let startAngle = curAngle % 360;
                    curAngle = Math.round(curAngle + data.amount / totalAmount * 360);
                    let endAngle = curAngle % 360;

                    startAngle = startAngle < 0 ? startAngle + 360 : startAngle;
                    endAngle = endAngle < 0 ? endAngle + 360 : endAngle;

                    if (startAngle > endAngle) {
                        startAngle -= 360;
                    }

                    const avgAngle = (startAngle + endAngle) / 2;
                    console.log(startAngle, endAngle, avgAngle);

                    const textX = (SectorSettings.CENTER_X + (TEXT_OFFSET + (ChartSettings.RADIUS * 1.3)) * Math.cos(degToRad(avgAngle)));
                    const textY = (SectorSettings.CENTER_Y + (TEXT_OFFSET + (ChartSettings.RADIUS * 1.3)) * Math.sin(degToRad(avgAngle)));

                    const lineX1 = (SectorSettings.CENTER_X + (ChartSettings.RADIUS * 1.7) * Math.cos(degToRad(avgAngle)));
                    const lineY1 = (SectorSettings.CENTER_Y + (ChartSettings.RADIUS * 1.7) * Math.sin(degToRad(avgAngle)));
                    const lineX2 = (SectorSettings.CENTER_X + (TEXT_OFFSET + ChartSettings.RADIUS) * Math.cos(degToRad(avgAngle)));
                    const lineY2 = (SectorSettings.CENTER_Y + (TEXT_OFFSET + ChartSettings.RADIUS) * Math.sin(degToRad(avgAngle)));

                    return (
                        <Fragment
                            key={`pie-fragment-${i}-${data.title}-${data.color}`}
                        >
                            <circle
                                key={`pie-${i}-${data.title}-${data.color}`}
                                className="unit"
                                r="15.9"
                                cx="50%"
                                cy="50%"
                                style={{
                                    stroke: data.color,
                                    strokeDasharray: `${numbersInPersent[i]} 100`,
                                    strokeDashoffset: (offset === 0 ? `0` : `-${offset}`)
                                }}
                            />

                            {i !== 0 &&
                            <line
                                key={`pie-${i}-${data.title}-${data.amount}`}
                                x1={lineX1}
                                y1={lineY1}
                                x2={lineX2}
                                y2={lineY2}
                            />
                            }

                            <text textAnchor="middle"
                                  key={`pie-${i}-${data.title}`}
                                  x={textX}
                                  y={textY}
                            >
                                {`${data.title}, ${data.amount} - ${numbersInPersent[i]}%`}
                            </text>

                        </Fragment>
                    )
                })}
            </svg>
        </div>
    );
};


export default PieChart;

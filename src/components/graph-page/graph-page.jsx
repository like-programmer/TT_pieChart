import React from "react";

const GraphPage = (props) => {

    const usersData = props.data;

    return (
        <div className="page-wrapper">
            <div className="chart-container">
                <div className="legend">
                    <div
                        className="legend__color"
                        style={{backgroundColor: `#a2c6e0`}}
                    />
                    <p className="legend__title">Title</p>
                </div>

                <svg className="chart" width="400" height="400" viewBox="0 0 50 50">

                    {usersData.map((data, i) => {
                        const index = i;

                        const reducer = (accumulator, currentValue) => accumulator + currentValue;
                        const totalAmount = (usersData.map((item) => parseInt(item.amount, 10))).reduce(reducer);
                        const amountValues = usersData.map((item) => (item.amount / totalAmount * 100).toFixed(2));

                        const offset = (amountValues.map((value, i) => {
                            let papa = 0;

                            if (i < index) {
                                papa += parseFloat(value);
                            }
                            return papa;
                        })).reduce(reducer);

                        return (
                            <circle
                                key={`${i}-${data.title}-${data.color}`}
                                className="unit"
                                r="15.9"
                                cx="50%"
                                cy="50%"
                                style={{
                                    stroke: data.color,
                                    strokeDasharray: `${amountValues[i]} 100`,
                                    strokeDashoffset: (offset === 0 ? `0` : `-${offset}`)
                                }}

                            />
                        )
                    })}
                </svg>
            </div>
        </div>
    );
};


export default GraphPage;

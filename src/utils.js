export const extend = (a, b) => {
    return Object.assign({}, a, b);
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;

export const getTotalAmount =  (data) => {
    return (data.map((item) => {
        return item.amount ? parseInt(item.amount, 10) : 0;
    })).reduce(reducer);
};

export const getNumbersInPersent =  (data) => {
    const totalAmount = getTotalAmount(data);
    return data.map((item) => (item.amount / totalAmount * 100).toFixed(2))
};

export const getOffset = (data, index) => {
    const amountValues = getNumbersInPersent(data);

    return amountValues.map((value, i) => {
        let accumulator = 0;

        if (i < index) {
            accumulator += parseFloat(value);
        }
        return accumulator;
    }).reduce(reducer);
};

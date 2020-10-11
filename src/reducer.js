import {extend} from "./utils.js";
import {PageNames} from "./const.js";
import UserData from "./mocks/userData.js";

const initialState = {
    userData: UserData,
    hoveredGraphArea: {},
    activePage: PageNames.FORM,
};

const ActionType = {
    ADD_TABLE_ROW: `ADD_TABLE_ROW`,
    CLEAR_TABLE_ROW: `CLEAR_TABLE_ROW`,
    DELETE_TABLE_ROW: `DELETE_TABLE_ROW`,
    SET_HOVERED_AREA: `SET_HOVERED_AREA`,
    CHANGE_ACTIVE_PAGE: `CHANGE_ACTIVE_PAGE`,
};

const ActionCreator = {
    addTableRow: () => ({
        type: ActionType.ADD_TABLE_ROW,
        payload: {
            id: Math.random(),
            title: ``,
            amount: ``,
            // amount: `${Math.random() * (30 - 2) + 2}`,
            color: `rgb(${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1}, ${Math.random() * (255 - 1) + 1})`,
        },
    }),

    clearTableRow: (data) => ({
        type: ActionType.CLEAR_TABLE_ROW,
        payload: data,
    }),

    deleteTableRow: (data) => ({
        type: ActionType.DELETE_TABLE_ROW,
        payload: data,
    }),

    changeActivePage: (page) => ({
        type: ActionType.CHANGE_ACTIVE_PAGE,
        payload: page,
    }),

    setHoveredArea: (data) => ({
        type: ActionType.SET_HOVERED_AREA,
        payload: data,
    }),
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_TABLE_ROW:
            const extendedTable = state.userData.slice();
            extendedTable.push(action.payload);

            return extend(state, {
                userData: extendedTable,
            });

        case ActionType.CLEAR_TABLE_ROW:
            const index = state.userData.indexOf(action.payload);
            const clearedRow = extend(action.payload, {
                title: ``,
                amount: ``,
            });
            const updatedTable = [].concat(state.userData.slice(0, index), clearedRow, state.userData.slice(index + 1));

            return extend(state, {
                userData: updatedTable,
            });

        case ActionType.DELETE_TABLE_ROW:
            const rowIndex = state.userData.indexOf(action.payload);
            const trimmedTable = [].concat(state.userData.slice(0, rowIndex), state.userData.slice(rowIndex + 1));

            return extend(state, {
                userData: trimmedTable,
            });

        case ActionType.CHANGE_ACTIVE_PAGE:
            return extend(state, {
                activePage: action.payload,
            });

        case ActionType.SET_HOVERED_AREA:
            return extend(state, {
                hoveredGraphArea: action.payload,
            });

        default:
            return state;
    }

    // return state;
};

export {reducer, ActionType, ActionCreator};

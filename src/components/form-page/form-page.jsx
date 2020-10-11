import React, {Fragment} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import PageHeader from '../page-header/page-header.jsx';
import Form from '../form/form.jsx';


const FormPage = (props) => {
    const {
        userData,
        activePage,
        onActivePageChange,
        onAddRowBtnClick,
        onDeleteRowBtnClick,
        onClearRowBtnClick,
    } = props;

    return (
        <Fragment>
            <PageHeader
                activePage={activePage}
                onActivePageChange={onActivePageChange}
            />

            <Form
                userData={userData}
                onAddRowBtnClick={onAddRowBtnClick}
                onClearRowBtnClick={onClearRowBtnClick}
                onDeleteRowBtnClick={onDeleteRowBtnClick}
            />
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    userData: state.userData,
    activePage: state.activePage,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onActivePageChange(pageName) {
            dispatch(ActionCreator.changeActivePage(pageName));
        },

        onAddRowBtnClick() {
            dispatch(ActionCreator.addTableRow());
        },

        onDeleteRowBtnClick(data) {
            dispatch(ActionCreator.deleteTableRow(data));
        },

        onClearRowBtnClick(data) {
            dispatch(ActionCreator.clearTableRow(data));
        }
    };
};


export {FormPage};
export default connect(mapStateToProps, mapDispatchToProps)(FormPage);

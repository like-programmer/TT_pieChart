import React, {Component} from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const withInput = (ExternalComponent) => {
    class WithInput extends Component {
        constructor(props) {
            super(props);

            this.state = {
                title: this.props.data.title,
                amount: this.props.data.amount,
            };

            this._titleChangeHandler = this._titleChangeHandler.bind(this);
            this._amountChangeHandler = this._amountChangeHandler.bind(this);
        }

        _titleChangeHandler(evt) {

            this.setState({
                title: evt.target.value,
            });
        }

        _amountChangeHandler(evt) {

            this.setState({
                amount: evt.target.value.replace(/[^+\d]/g, ''),
            });
        }

        componentWillUnmount() {
            const {data, updateTableRow} = this.props;

            updateTableRow({
                id: data.id,
                title: this.state.title,
                amount: this.state.amount,
                color: data.color,
            });
        }

        render() {
            return (
                <ExternalComponent
                    {...this.props}
                    title={this.state.title}
                    amount={this.state.amount}
                    onTitleChange={this._titleChangeHandler}
                    onAmountChange={this._amountChangeHandler}
                />
            );
        }
    }

    const mapStateToProps = (state) => ({
        userData: state.userData,
    });

    const mapDispatchToProps = (dispatch) => ({
        updateTableRow(data) {
            dispatch(ActionCreator.updateTableRow(data));
        },
    });

    return connect(mapStateToProps, mapDispatchToProps)(WithInput);
};

export {withInput};
export default withInput;

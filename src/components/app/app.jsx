import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import FormPage from '../form-page/form-page.jsx';
import GraphPage from '../chart-page/chart-page.jsx';

import {PageNames} from "../../const.js";


class App extends PureComponent {
    _renderPage() {
        const {
            activePage,
        } = this.props;

        if (activePage === PageNames.FORM) {
            return (
                <FormPage/>
            );
        } else {
            return (
                <GraphPage/>
            );
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        {this._renderPage()}
                    </Route>
                    <Route exact path="/chart">
                        <GraphPage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    activePage: state.activePage,
});


const mapDispatchToProps = (dispatch) => {
    return {};
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FormPage from '../form-page/form-page.jsx';
import GraphPage from '../graph-page/graph-page.jsx';

import data from "../../mocks/userData.js";


class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <FormPage
                            data={data}
                        />
                    </Route>
                    <Route exact path="/graph">
                        <GraphPage
                            data={data}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;

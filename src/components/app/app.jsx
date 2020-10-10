import React, {Fragment} from "react";
import FormPage from '../form-page/form-page.jsx';
import GraphPage from '../graph-page/graph-page.jsx';

import data from "../../mocks/userData.js";


const App = () => {
    return (
        <Fragment>
            <FormPage
            data={data}
            />
            <GraphPage
                data={data}
            />
        </Fragment>
    );
};


export default App;

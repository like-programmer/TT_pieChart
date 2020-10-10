import React, {Fragment} from "react";
import PageHeader from '../page-header/page-header.jsx';
import Form from '../form/form.jsx';


const FormPage = (props) => {
    const {data} = props;

    return (
        <Fragment>
            <PageHeader/>

            <Form
            data={data}
            />
        </Fragment>
    );
};


export default FormPage;

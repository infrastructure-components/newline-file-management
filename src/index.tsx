import React from 'react';
import "@babel/polyfill";

import {
    Environment,
    Route,
    ServiceOrientedApp
} from "infrastructure-components";

import UploadForm from './upload-form';

export default (
    <ServiceOrientedApp
        stackName = "newline-file-management"
        buildPath = 'build'
        region='us-est-1'>

        <Environment name="dev" />

        <Route
            path="/"
            name="Newline File-Management"
            render={(props) => <UploadForm/>}
        />


    </ServiceOrientedApp>
);
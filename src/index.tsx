import React, { useState } from 'react';
import "@babel/polyfill";

import {
    Environment,
    Route,
    ServiceOrientedApp
} from "infrastructure-components";

import FileStorage from './file-storage';
import UploadForm from './upload-form';
import FileList from './file-list';

const FileManagement = (props) => {

    const [refetch, setRefetch] = useState(undefined);

    return <div>
        <FileList setRefetch={setRefetch}/>
        <UploadForm refetch={refetch}/>
    </div>;
}

export default (
    <ServiceOrientedApp
        stackName = "newline-file-management"
        buildPath = 'build'
        region='us-east-1'>

        <Environment name="dev" />
        <FileStorage/>

        <Route
            path="/"
            name="Newline File-Management"
            render={(props) => <FileManagement/>}
        />


    </ServiceOrientedApp>
);
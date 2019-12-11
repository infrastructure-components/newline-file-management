import React from 'react';

import {
    Storage,
    uploadFile
} from "infrastructure-components";

export const FILE_STORAGE_ID = "FILESTORAGE";

export const upload = (file, onUpload) => uploadFile(
    FILE_STORAGE_ID,
    "",
    file,
    {},
    //onProgess: (uploaded: number) => Boolean,
    uploaded => {
        const percent_done = Math.floor( ( uploaded / file.size ) * 100 );
        console.log("Uploading File - " + percent_done + "%");
        return true;
    },
    //onComplete: (uri: string) => void,
    uri => onUpload(uri), //onUpload(uri),

    //onError: (err: string) => void
    err => console.log(err)

);


export default function () {
    return <Storage
        id={FILE_STORAGE_ID}
        path="/filestorage"
    />
};
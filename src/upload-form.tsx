import React from 'react';
import styled from 'styled-components';
import { upload } from './file-storage';

const outerMargin = "10px";
const borderWidth = "2px";
const inputId = "uploadfile";

const LabelFrame = styled.label`
    /** full-width except for margin */
    margin: ${outerMargin} auto;
    width: calc(100% - 2 * ${outerMargin} - 2 * ${borderWidth});
    
    /** center children */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
    
    
    /** appearance */
    font-size: 16px;
    background-color: #fff;
    border: ${borderWidth} dashed #888;
    
    &:hover {
        background-color: #ADA;
        cursor: pointer;
    };
`;

const UploadInput = styled.input`
    display: none;
`;

const UploadForm = (props) => {

    const onFileSelected = event => {
        console.log(event.target.files[0]);
        upload(event.target.files[0], (uri) => {
            console.log("file uploaded: ", uri);
            props.refetch();
        });
    };

    return (
        <LabelFrame htmlFor={inputId}>
            <UploadInput type="file" name={inputId} id={inputId} onChange={onFileSelected}/>
            <span >Upload File</span>
        </LabelFrame>
    );
};

export default UploadForm;
import React from 'react';
import styled from 'styled-components';
import {
    File,
    getFileUrl,
    LISTFILES_MODE,
    FilesList
} from 'infrastructure-components';

import { FILE_STORAGE_ID } from './file-storage';

const outerMargin = "10px";

const StyledList = styled.ul`
    margin: ${outerMargin} auto;
    width: calc(100% - 2 * ${outerMargin});
    padding-left: 0;
`;

const Item = styled.li`
    border-top: 1px solid #888;
    list-style-type: none;
`;

const FileLink = styled.a`
    display: block;
    text-decoration: none;
    color: black;
    padding: 5px;
    &:hover {
        background: #CCC;
        cursor: pointer;
    }  
`;

const FileList = props => {

    return <FilesList
        storageId={FILE_STORAGE_ID}
        prefix=""
        onSetRefetch={props.setRefetch}
        mode={LISTFILES_MODE.FILES}
    >{
        ({loading, files, error}) => {
            console.log(files);

            return (loading && <div>Loading</div>) ||
                (error && <div>{error}</div>) ||
                <StyledList>
                    {
                        files.map((file, index) => (
                            <Item key={`item-${index}`}>
                                <FileLink download target="_blank" href={file.url}>{file.file}</FileLink>
                            </Item>

                        ))
                    }
                </StyledList>
        }
    }</FilesList>
};

export default FileList;
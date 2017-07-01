import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
class MyDropzone extends Component {
  render() {
    const { input,desc,accept } = this.props
    const onDrop = (files) => {
        input.onChange(files);
    };
    return (
      <Dropzone onDrop={onDrop} accept={accept}>
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
           if (isDragActive) {
             return "This file is authorized";
          }
           if (isDragReject) {
             return "This file is not authorized";
          }
           return acceptedFiles.length || rejectedFiles.length
             ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
            : desc;
        }}
      </Dropzone>
    )
  }
}

export default MyDropzone;

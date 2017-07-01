import React, { Component } from 'react';
const $ = window.$;
require('dropify');

class MyDropify extends Component {
  componentDidMount(){
    $('.dropify').dropify();
  }
  render() {
    const { input,dataAllowedFileExtensions } = this.props
    const onAttachmentChange = (e) => {
        e.preventDefault();
        const files = [...e.target.files];
        input.onChange(files);
    };
    return (
      <div>
        <input type="file"
               onChange={onAttachmentChange}
               className="dropify"
               data-allowed-file-extensions={dataAllowedFileExtensions} />
      </div>
    )
  }
}

export default MyDropify;

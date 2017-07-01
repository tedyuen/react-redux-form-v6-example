import React, { Component } from 'react';
const $ = window.$;
require('dropify');

class MyDropify extends Component {
  componentDidMount(){
    $('.dropify').dropify({

    });
  }
  render() {
    const { input } = this.props
    const onAttachmentChange = (e) => {
        e.preventDefault();
        const files = [...e.target.files];
        input.onChange(files);
    };
    return (
      <div>
        <input type="file"  onChange={onAttachmentChange} multiple className="dropify" data-allowed-file-extensions="doc docx txt pdf xls xlsx jpg png jpeg bmp" />
      </div>
    )
  }
}


export default MyDropify;

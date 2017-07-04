import React, { Component } from 'react';
import RemoteSubmitForm from './RemoteSubmitForm';
import RemoteSubmitButton from './RemoteSubmitButton';
import {Values} from 'redux-form-website-template'

class RemoteSubmit extends Component {

  render(){
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <h3>Remote Validation Form</h3>
                <RemoteSubmitForm></RemoteSubmitForm>
                <RemoteSubmitButton></RemoteSubmitButton>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <Values form="remoteSubmit"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RemoteSubmit;

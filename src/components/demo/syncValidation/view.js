import React, { Component } from 'react';
import SyncValidationForm from './SyncValidationForm';
import {Values} from 'redux-form-website-template'

class SyncValidation extends Component {
  onSubmit = (value) => {
    console.log("Simple onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <h3>Sync Validation Form</h3>
                  <SyncValidationForm onSubmit={this.onSubmit}></SyncValidationForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="syncValidation"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default SyncValidation;

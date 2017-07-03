import React, { Component } from 'react';
import FieldLevelValidationForm from './FieldLevelValidationForm';
import {Values} from 'redux-form-website-template'

class FieldLevelValidation extends Component {
  onSubmit = (value) => {
    console.log("Field Level onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <h3>Field-Level Validation Form</h3>
                  <FieldLevelValidationForm onSubmit={this.onSubmit}></FieldLevelValidationForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="fieldLevelValidation"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default FieldLevelValidation;

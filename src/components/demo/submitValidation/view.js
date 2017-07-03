import React, { Component } from 'react';
import SubmitValidationForm from './SubmitValidationForm';
import {Values} from 'redux-form-website-template'

class SubmitValidation extends Component {
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
                  <h3>Submit Validation Form</h3>
                  <SubmitValidationForm onSubmit={this.onSubmit}></SubmitValidationForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="submitValidationForm"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default SubmitValidation;

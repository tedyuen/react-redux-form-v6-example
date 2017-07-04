import React, { Component } from 'react';
import FieldArraysForm from './FieldArraysForm';
import {Values} from 'redux-form-website-template'

class FieldArray extends Component {
  onSubmit = (value) => {
    console.log("FieldArraysForm onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <h3>Field Arrays Form</h3>
                <FieldArraysForm onSubmit={this.onSubmit}></FieldArraysForm>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <Values form="fieldArrays"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FieldArray;

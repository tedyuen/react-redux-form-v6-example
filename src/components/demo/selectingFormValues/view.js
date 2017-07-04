import React, { Component } from 'react';
import SelectingFormValuesForm from './SelectingFormValuesForm';
import {Values} from 'redux-form-website-template'

class SelectingFormValues extends Component {
  onSubmit = (value) => {
    console.log("Async onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <h3>Selecting Form Values Form</h3>
                  <SelectingFormValuesForm onSubmit={this.onSubmit}></SelectingFormValuesForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="selectingFormValues"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default SelectingFormValues;

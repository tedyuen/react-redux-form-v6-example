import React, { Component } from 'react';
import FieldNormalizingForm from './FieldNormalizingForm';
import {Values} from 'redux-form-website-template'

class Normalizing extends Component {
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
                <h3>Normalizing Form</h3>
                <FieldNormalizingForm onSubmit={this.onSubmit}></FieldNormalizingForm>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <Values form="normalizing"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Normalizing;

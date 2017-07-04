import React, { Component } from 'react';
import InitializeFromStateForm from './InitializeFromStateForm';
import {Values} from 'redux-form-website-template'

class InitializeFromState extends Component {
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
                  <h3>Initialize From State Form</h3>
                  <InitializeFromStateForm onSubmit={this.onSubmit}></InitializeFromStateForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="initializeFromState"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default InitializeFromState;

import React, { Component } from 'react';
import WizardForm from './WizardForm';
import {Values} from 'redux-form-website-template'

class Wizard extends Component {
  onSubmit = (value) => {
    console.log("Wizard onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <h3>Wizard Form</h3>
                <WizardForm onSubmit={this.onSubmit}></WizardForm>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="white-box">
                <Values form="wizard"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Wizard;

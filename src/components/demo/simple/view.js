import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import {Values} from 'redux-form-website-template'

class Simple extends Component {
  onSubmit = (value) => {
    if(value.inputfile1 !== undefined){
      console.log("inputfile1");
      console.log(value.inputfile1);
    }
    if(value.inputfile2 !== undefined){
      console.log("inputfile2");
      console.log("-------------");
      for (let file of value.inputfile2) {
        console.log(file);
      }
      console.log("-------------");
    }
    console.log("Simple onSubmit: "+JSON.stringify(value));
  }
  render(){
    return (
      <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <SimpleForm onSubmit={this.onSubmit}></SimpleForm>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="white-box">
                  <Values form="simple"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Simple;

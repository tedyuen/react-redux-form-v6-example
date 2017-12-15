import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field,Fields, reduxForm } from 'redux-form'
import { load as loadAccount } from './account'
import checkArray from './checkArray'

const data1 = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  email: 'tedyuen.goo@gmail.com',
  employed: true,
  favoriteColor: 'Blue',
  cbArray: [
    true,
    "",
    true
  ],
  bio: 'Born to write amazing Redux code.'
}
const data2 = {
  firstName: 'Jane2',
  lastName: 'Doe2',
  age: '32',
  sex: 'male',
  email: 'tedyuen@ithooks.com',
  employed: false,
  favoriteColor: 'Orange',
  cbArray: [
    "",
    "",
    true
  ],
  bio: 'Welcome to china!'
}
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

class InitializeFromStateForm extends Component{

  render(){
    const { handleSubmit, load, pristine, reset, submitting, initialValues } = this.props
    let cbChecks = [
      
    ]
    for(let index=0;index<8;index++){
      cbChecks.push(`cbArray[${index}]`)
    }
    return(
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">First Name</span>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">Last Name</span>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">Email</span>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Sex</label>
          <label className="radio-inline m-l-10">
            <Field type="radio" name="sex" component="input" value="male"/>{' '}
            Male
          </label>
          <label className="radio-inline m-l-10">
            <Field type="radio" name="sex" component="input" value="female"/>{' '}
            Female
          </label>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">Favorite Color</span>
            <Field name="favoriteColor" component="select" className="form-control">
              <option value="">Select a color...</option>
              {colors.map(colorOption => (
                <option value={colorOption} key={colorOption}>
                  {colorOption}
                </option>
              ))}
            </Field>
          </div>
        </div>
        <div className="form-group">
          <label>Employed</label>
          <label className="radio-inline">
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
              className="checkbox checkbox-success"
            />
          </label>
        </div>
        <div className="form-group">
          <label>checkbox array</label>
          <label className="radio-inline">
            <Fields
              names={cbChecks}
              id="cbArray"
              component={checkArray}
              className="checkbox checkbox-success"
            />
          </label>
        </div>
        <div className="form-group">
          <label>Bio</label>
          <div>
            <Field name="bio" component="textarea" className="form-control"/>
          </div>
        </div>
        <div className="m-t-15 form-group">
          <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={pristine  || submitting}>Submit</button>
          <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
        <div className="form-group m-t-15">
          <button type="button" onClick={() => load(data1)} className="btn btn-primary waves-effect waves-light m-r-10">Load Account 1</button>
          <button type="button" onClick={() => load(data2)} className="btn btn-primary waves-effect waves-light m-r-10">Load Account 2</button>
        </div>
        <h3>initialValues</h3>
        <pre>
          {JSON.stringify(initialValues)}
        </pre>
      </form>
    )
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState',// a unique identifier for this form
  enableReinitialize:true,
  keepDirtyOnReinitialize:true,// 这个值表示重新初始化表单后，不替换已更改的值，可以用clear来测试
})(InitializeFromStateForm)

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm)

export default InitializeFromStateForm

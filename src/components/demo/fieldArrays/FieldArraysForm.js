import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import inputField from '../../utils/validation/inputField';
import renderMembers from './renderMembers';
import validate from './validate';

let FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field
        name="clubName"
        type="text"
        component={inputField}
        label="Club Name"
      />
      <FieldArray name="members" component={renderMembers}/>
      <div className="m-t-15 form-group">
        <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={submitting}>Submit</button>
        <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

FieldArraysForm = reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
  validate
})(FieldArraysForm)

FieldArraysForm = connect(
  state => ({
    initialValues: {
      members:[
        {
          firstName:'abc',
          lastName:'123'
        }
      ]
    }
  }),
)(FieldArraysForm)

export default FieldArraysForm
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from './validation/inputField';
import radioField from './validation/radioField';
import textareaField from './validation/textareaField';
import selectField from './validation/selectField';
import { validate } from './validDesc';
import { warn } from './warnDesc';


const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const radios = [
    {
      value:'male',
      label:'Male'
    },
    {
      value:'female',
      label:'Female'
    }
  ]
  const selects = [
    {
      text:'-- Select --',
      value:'-1'
    },
    {
      text:'Red',
      value:'ff0000'
    },
    {
      text:'Green',
      value:'00ff00'
    },
    {
      text:'Blue',
      value:'0000ff'
    }
  ]
  return(
    <form onSubmit={handleSubmit}>
      <Field component={inputField} label="username" name="username" type="text"></Field>
      <Field component={inputField} label="Age" name="age" type="number"></Field>
      <Field component={inputField} label="Email" name="email" type="email"></Field>
      <Field component={radioField} radios={radios} label="Sex" name="sex" type="radio"/>
      <Field component={selectField} selects={selects} label="Favorite Color" name="favoriteColor"/>
      <Field component={textareaField} label="Notes" name="notes" rows="3"/>
      <div className="m-t-15 form-group">
        <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={pristine || submitting}>Submit</button>
        <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate,// <--- validation function given to redux-form
  warn,// <--- warning function given to redux-form
})(SyncValidationForm)

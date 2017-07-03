import React from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from '../../utils/validation/inputField';
import submit from './submit';

const SubmitValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting,error } = props;
  return(
    <form onSubmit={handleSubmit(submit)} noValidate>
      <Field component={inputField} label="username" name="username" type="text"></Field>
      <Field component={inputField} label="password" name="password" type="password"></Field>
      {error && <strong className="text-danger">{error}</strong>}
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
  form: 'submitValidationForm', // a unique identifier for this form
})(SubmitValidationForm)

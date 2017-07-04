import React from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from '../../utils/validation/inputField';
import submit from './submit'

const RemoteSubmitForm = props => {
  const { handleSubmit,error } = props;
  return(
    <form onSubmit={handleSubmit} noValidate>
      <Field component={inputField} label="username" name="username" type="text"></Field>
      <Field component={inputField} label="password" name="password" type="password"></Field>
      {error && <strong className="text-danger">{error}</strong>}
      <div className="m-t-15 form-group">
        No submit button in the form. The submit button below is a separate
        unlinked component.
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'remoteSubmit', // a unique identifier for this form
  onSubmit: submit
})(RemoteSubmitForm)

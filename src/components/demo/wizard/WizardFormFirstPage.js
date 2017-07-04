import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import inputField from '../../utils/validation/inputField'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={inputField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={inputField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)

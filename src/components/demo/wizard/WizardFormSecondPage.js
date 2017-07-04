import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import inputField from '../../utils/validation/inputField'

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={inputField} label="Email" />
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
      <div>
        <button type="button" className="btn btn-danger btn-rounded waves-effect waves-light m-r-15" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)

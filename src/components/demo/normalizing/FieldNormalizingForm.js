import React from 'react'
import { Field, reduxForm } from 'redux-form'
import normalizePhone from './normalizePhone'

const upper = value => value && value.toUpperCase()
const lower = value => value && value.toLowerCase()
const lessThan = otherField => (value, previousValue, allValues) =>
  parseFloat(value) < parseFloat(allValues[otherField]) ? value : previousValue
const greaterThan = otherField => (value, previousValue, allValues) =>
  parseFloat(value) > parseFloat(allValues[otherField]) ? value : previousValue

const FieldNormalizingForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Username</span>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
            normalize={lower}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Shout</span>
          <Field
            name="shout"
            component="input"
            type="text"
            placeholder="Shout something!"
            normalize={upper}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Phone</span>
          <Field
            name="phone"
            component="input"
            type="text"
            placeholder="Phone Number"
            normalize={normalizePhone}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Min</span>
          <Field
            name="min"
            component="input"
            type="number"
            normalize={lessThan('max')}
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Max</span>
          <Field
            name="max"
            component="input"
            type="number"
            normalize={greaterThan('min')}
            className="form-control"
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={submitting}>Submit</button>
        <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'normalizing', // a unique identifier for this form
  initialValues: { min: '1', max: '10' }
})(FieldNormalizingForm)

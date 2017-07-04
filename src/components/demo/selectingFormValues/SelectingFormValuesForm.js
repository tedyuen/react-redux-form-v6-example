import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm,formValueSelector } from 'redux-form'

let SelectingFormValuesForm = props => {
  const {
    favoriteColorValue,
    fullName,
    handleSubmit,
    hasEmailValue,
    pristine,
    reset,
    submitting
  } = props
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
        <label>Has Email?</label>
        <label className="radio-inline">
          <Field
            name="hasEmail"
            id="hasEmail"
            component="input"
            type="checkbox"
            className="checkbox checkbox-success"
          />
        </label>
      </div>
      {hasEmailValue &&
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
        </div>}
      <div className="form-group">
        <div className="input-group">
          <span className="input-group-addon">Favorite Color</span>
          <Field name="favoriteColor" component="select" className="form-control">
            <option />
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
          </Field>
        </div>
      </div>
      {favoriteColorValue &&
      <div
        style={{
          height: 80,
          width: 200,
          margin: '10px auto',
          backgroundColor: favoriteColorValue
        }}
      />}
      <div className="m-t-15 form-group">
        <button type="submit" className="btn btn-success waves-effect waves-light m-r-10" disabled={pristine  || submitting}>
          Submit {fullName}
        </button>
        <button type="button" className="btn btn-danger waves-effect waves-light" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SelectingFormValuesForm = reduxForm({
  form: 'selectingFormValues',// a unique identifier for this form
})(SelectingFormValuesForm)

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues') // <-- same as form name
SelectingFormValuesForm = connect(state => {
  // can select values individually
  const hasEmailValue = selector(state, 'hasEmail')
  const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    hasEmailValue,
    favoriteColorValue,
    fullName: `${firstName || ''} ${lastName || ''}`
  }
})(SelectingFormValuesForm)

export default SelectingFormValuesForm

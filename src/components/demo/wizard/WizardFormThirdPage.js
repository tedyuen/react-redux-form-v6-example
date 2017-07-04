import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({ input,label, meta: { touched, error } }) => (
  <div className={touched && error ? 'has-error form-group':'form-group'}>
    <div className="input-group">
      <span className="input-group-addon">{label}</span>
      <select {...input} className="form-control">
        <option value="">Select a color...</option>
        {colors.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
    </div>
    {touched && error && <div className="help-block with-errors">{error}</div>}
  </div>
)

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="favoriteColor" label="Favorite Color" component={renderColorSelector} />
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
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" className="form-control"/>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-danger btn-rounded waves-effect waves-light m-r-15" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="btn btn-info btn-rounded waves-effect waves-light" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)

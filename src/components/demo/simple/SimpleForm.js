import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MyDropify from '../../utils/MyDropify';
import MyDropzone from '../../utils/MyDropzone';
const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
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
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div className="form-group">
        <label>Employed</label>
        <label className="radio-inline">
          <Field
            name="employed1"
            id="employed1"
            component="input"
            type="checkbox"
            className="checkbox checkbox-success"
          />
        </label>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label>Dropify</label>
          <Field component={MyDropify}
                 name="inputfile1"
                 dataAllowedFileExtensions="doc docx txt pdf xls xlsx jpg png bmp"></Field>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <label>Dropzone</label>
          <Field component={MyDropzone}
                 name="inputfile2"
                 desc="My Dropzone"
                 accept="image/png,image/jpeg"></Field>
        </div>
      </div>
      <div className="form-group">
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" className="form-control"/>
        </div>
      </div>
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
  form: 'simple', // a unique identifier for this form
})(SimpleForm)

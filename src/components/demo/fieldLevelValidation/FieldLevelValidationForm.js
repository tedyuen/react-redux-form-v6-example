import React from 'react';
import { Field, reduxForm } from 'redux-form';
import inputField from '../../utils/validation/inputField';
import radioField from '../../utils/validation/radioField';
import textareaField from '../../utils/validation/textareaField';
import selectField from '../../utils/validation/selectField';
import { required,maxLength15,minLength2,number,minValue18,email,nullValue1 } from './validDesc';
import { tooOld } from './warnDesc';


const FieldLevelValidationForm = props => {
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
    <form onSubmit={handleSubmit} noValidate>
      <Field validate={[required,maxLength15,minLength2]} component={inputField} label="username" name="username" type="text"></Field>
      <Field validate={[required,number,minValue18]} warn={tooOld} component={inputField} label="Age" name="age" type="number"></Field>
      <Field validate={[required,email]} component={inputField} label="Email" name="email" type="email"></Field>
      <Field validate={required} component={radioField} radios={radios} label="Sex" name="sex" type="radio"/>
      <Field validate={[required,nullValue1]} component={selectField} selects={selects} label="Favorite Color" name="favoriteColor"/>
      <Field validate={required} component={textareaField} label="Notes" name="notes" rows="3"/>
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
  form: 'fieldLevelValidation', // a unique identifier for this form
})(FieldLevelValidationForm)

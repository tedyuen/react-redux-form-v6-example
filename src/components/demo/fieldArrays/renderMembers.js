import React from 'react';
import { Field,FieldArray } from 'redux-form'
import inputField from '../../utils/validation/inputField';
import renderHobbies from './renderHobbies';

const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul className="list-group">
    <li className="list-group-item">
      <button type="button" onClick={() => fields.push({})} className="btn btn-warning waves-effect waves-light">Add Member</button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index} className="list-group-item">
        <div className="m-b-15">
          <span>Member #{index + 1}</span>
          <button type="button" onClick={() => fields.remove(index)} className="btn m-l-20 btn-danger btn-circle">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={inputField}
          label="First Name"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={inputField}
          label="Last Name"
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
)

export default renderMembers;

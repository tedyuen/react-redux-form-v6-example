import React from 'react';
import { Field } from 'redux-form'
import inputField from '../../utils/validation/inputField';

const renderHobbies = ({ fields, meta: { error } }) => (
  <ul className="list-group">
    <li className="list-group-item">
      <button type="button" onClick={() => fields.push()} className="btn btn-primary waves-effect waves-light">Add Hobby</button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index} className="list-group-item">
        <div className="m-b-15">
          <span>Member #{index + 1}</span>
          <button type="button" onClick={() => fields.remove(index)} className="btn m-l-20 btn-danger btn-circle">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <Field
          name={hobby}
          type="text"
          component={inputField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

export default renderHobbies;

import React from 'react';
const selectField = ({
  input,
  label,
  selects,
  meta: { touched, error, warning }
}) => (
  <div className={touched && error ? 'has-error form-group':'form-group'}>
    <div className="input-group">
      <span className="input-group-addon">{label}</span>
      <select {...input} className="form-control">
        {
          selects.map((item, i) => (
            <option key={i} value={item.value}>{item.text}</option>
          ))
        }
      </select>
    </div>
    {touched &&
      ((error && <div className="help-block with-errors">{error}</div>) ||
        (warning && <div className="help-block with-errors">{warning}</div>))}
  </div>
)

export default selectField;

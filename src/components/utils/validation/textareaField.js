import React from 'react';

const textareaField = ({
  input,
  label,
  type,
  cols,
  rows,
  meta: { touched, error, warning }
}) => (
  <div className={touched && error ? 'has-error form-group':'form-group'}>
    <label>{label}</label>
    <textarea {...input} cols={cols} rows={rows} className="form-control"></textarea>
    {touched &&
      ((error && <div className="help-block with-errors">{error}</div>) ||
        (warning && <div className="help-block with-errors">{warning}</div>))}
  </div>
)

export default textareaField;

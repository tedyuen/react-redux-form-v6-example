import React from 'react';

const inputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning,asyncValidating }
}) => (
  <div className={touched && error ? 'has-error form-group':'form-group'}>
    <div className="input-group">
      <span className="input-group-addon">{label}</span>
        <input {...input} placeholder={label} type={type} className="form-control"/>
      {asyncValidating &&
        <span className="input-group-addon">
          <i className="fa fa-refresh"></i>
        </span>}
    </div>
    {touched &&
      ((error && <div className="help-block with-errors">{error}</div>) ||
        (warning && <div className="help-block with-errors">{warning}</div>))}
  </div>
)

export default inputField;

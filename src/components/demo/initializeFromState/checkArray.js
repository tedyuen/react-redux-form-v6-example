import React, { Component } from 'react';

const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <input {...fields.cbArray[0].input} type="checkbox"/>
    </div>
    <div className="input-row">
      <input {...fields.cbArray[1].input} type="checkbox"/>
    </div>
    <div className="input-row">
      <input {...fields.cbArray[2].input} type="checkbox"/>
    </div>
  </div>
)

export default renderFields;
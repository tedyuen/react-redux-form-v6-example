import React, { Component } from 'react';

const renderFields = (fields) => (
  <div>
    {fields.cbArray.map((cb,index) => 
      <div className="input-row" key={index}>
        <input {...cb.input} type="checkbox" checked={cb.input.value===true?true:false}/>
      </div>
    )}
  </div>
  
)

export default renderFields;
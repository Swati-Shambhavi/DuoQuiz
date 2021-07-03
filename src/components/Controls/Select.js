import React from 'react';

const Select = ({ id, label, name, values, ref_ }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} ref={ref_}>
        {values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;

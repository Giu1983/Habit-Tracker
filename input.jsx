import React from "react";

// I wrote as parameters name,label, error and used the rest operator with spread for the other parameters (ex."onChange")

const Input = ({ name, label, error, ...rest }) => {

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" placeholder="Enter Name"/>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>

    // div wrote with bootstrap classes. With this div we want render an error message.
  );
};

export default Input;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    //validate method

  const options = { abortEarly: false };

  const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    // the first argument is what I want to validate, the second is the schema.
  const errors = {};
    for (let item of error.details) //this is an implementation to map an array in an object.
      errors[item.path[0]] = item.message; //with result.error. details iterate over this array. Each item has a path property that is an array, for this reason I wrote "errors [item.path[0]] = item.message"
  return errors;
    };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // with this function I would like to make interactive the form. "e" is for "event"

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} }); // this string is to avoid the error in which it's not possible to read property 'username' of null.
    if (errors) return;

    this.doSubmit();
  };

  // handleChange = ({ currentTarget: input }) => {
  //   console.log('Handle change')
  //   const errors = { ...this.state.errors }; // this string is wrote for the validation on change
  //   const errorMessage = this.validateProperty(input);
  //   if (errorMessage) errors[input.name] = errorMessage;
  //   else delete errors[input.name];

  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;
  //   this.setState({ data });
  // };

  // below the method to use the button in each form. The button is disabled because the form is not real

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">   
        {label}
      </button>
    );
  }

  //below the method to render an input

  renderInput (name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

// there is not render method because this component doesn't render nothing.

export default Form;

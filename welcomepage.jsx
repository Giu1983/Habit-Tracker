import React from "react";
import Joi from "joi-browser";
import Form from "./form";

//import Input from "./input"; // input component imported from another file

// below I created a class welcome in which I placed a form for the users
// the function below is to validate the data inserted by the users. If the users don't text name or surname not recognize they get an error alert
class Welcome extends Form {
  state = {
    data: { name: "", surname: "" },
    errors: {}
  };
  //below with "schema" I validate the input for name and surname, after the download of Joi.

  schema = {
    name: Joi.string()
      .required()
      .label("Name"), //to display "name" and "surname" with first capital letter when you got th e error alert I used the "label" method, added to "schema"
    surname: Joi.string()
      .required()
      .label("Surname")
  };

  // with this function I would like to make interactive the form. "e" is for "event"
   doSubmit = () => {
    //call the server
    console.log("Submitted");
   };

  //below there are two validation functions. One is to validate one property or one input, and the other is to validate the entire form.

  validateProperty = ({ name, value }) => {
    if (name === "name") {
      if (value.trim() === "") return "Name is required.";
    }

    if (name === "surname") {
      if (value.trim() === "") return "Surname is required.";
    }
  };

  // this string is wrote for the validation on change and to update the state

  handleChange = ({currentTarget}) => {
    const {name, value} = currentTarget

    // error block
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(currentTarget);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    // modify data
    const data = { ...this.state.data };
    data[name] = value;

    // setting new state
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("surname", "Surname")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
export default Welcome;

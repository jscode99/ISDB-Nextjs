import { useState } from "react";
import { fetchService } from "../../services/fetchService";
//constant
import { CONST } from "../../constant";
// Validator
import {
  emailValidator,
  firstNameValidator,
  textAreaValidator,
} from "../../services/validationService";

export default function UseContactForm(
  fromObject,
  errorObj,
  setLoaderTime,
  setRegisterDone,
) {
  //State Setting
  const [inputs, setInputs] = useState(fromObject);
  const [errors, setErrors] = useState(errorObj);
  // Submit Handling
  const handleSubmit = async inputs => {
    let errorObject = {};
    Object.keys(inputs).forEach(input => {
      let error = validator(input, inputs[input]);
      if (error !== undefined) errorObject[input] = error;
      setErrors(err => ({
        ...err,
        [input]: error,
      }));
    });
    console.log("errorObject-------->", errorObject);

    if (Object.values(errorObject).filter(err => err === false).length === 0) {
      setLoaderTime(true);
      // console.log("===Testing====", inputs);
      let url = process.env.BASE_URL + process.env.PATH.CONTACT_US;
      let body = {
        FirstName: inputs.firstName,
        LastName: inputs.lastName,
        Email: inputs.email,
        Phone: inputs.phoneNumber,
        Message: inputs.textarea,
      };
      let response = await fetchService(url, CONST.API_METHOD.POST, body);
      if (response.id) {
        setLoaderTime(false);
        setRegisterDone(true);
        setInputs(fromObject);
        setErrors(errorObj);
      } else alert("Oops! Something went wrong.");
    }

    // setTimeout(() => {
    //   setLoaderTime(false);
    // }, 3000);
  };

  // Validator Function
  const validator = (name, value) => {
    switch (name) {
      case "firstName":
        return firstNameValidator(value);
      case "email":
        return emailValidator(value);
      case "textarea":
        return textAreaValidator(value);
    }
  };

  // Input Change Handling
  const handleInputChange = e => {
    const { name, value } = e.target;
    let error = validator(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
    setInputs(inputs => ({
      ...inputs,
      [name]: value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
    setErrors,
    setInputs,
  };
}

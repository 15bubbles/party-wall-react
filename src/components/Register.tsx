import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { registerUser } from "../actions/auth";
import {
  isEmailValid,
  hasPasswordDigits,
  hasPasswordLowercaseLetters,
  hasPasswordSpecialCharacter,
  hasPasswordUppercaseLetters,
  hasPasswordCorrectLength,
} from "../shared/validators/validators";
import {
  RegistrationFormData,
  RegistrationFormErrors,
} from "../shared/interfaces/auth";

const validatePassword = (password: string): string => {
  const passwordErrorBase = "Password should contain ";
  const passwordValidationErrors = [];
  const passwordMinCharacters = 8;

  if (!hasPasswordCorrectLength(password, passwordMinCharacters)) {
    passwordValidationErrors.push(
      ` at least ${passwordMinCharacters} characters`
    );
  }

  if (!hasPasswordDigits(password)) {
    passwordValidationErrors.push(" digits");
  }
  if (!hasPasswordUppercaseLetters(password)) {
    passwordValidationErrors.push(" upper case letters");
  }
  if (!hasPasswordLowercaseLetters(password)) {
    passwordValidationErrors.push(" lower case letters");
  }
  if (!hasPasswordSpecialCharacter(password)) {
    passwordValidationErrors.push(" special characters");
  }

  return passwordValidationErrors.length > 0
    ? `${passwordErrorBase}${passwordValidationErrors.join(",")}`
    : "";
};

// TODO: change this validate function to a yup schema perhaps
const validate = (
  registrationForm: RegistrationFormData
): RegistrationFormErrors => {
  const errors: RegistrationFormErrors = {};

  // email validation
  if (!registrationForm.email) {
    errors.email = "This field is required";
  } else if (!isEmailValid(registrationForm.email)) {
    errors.email = "Provided email is not valid";
  }

  // password validation
  if (!registrationForm.password) {
    errors.password = "This field is required";
  } else {
    const passwordValidationError = validatePassword(registrationForm.password);
    if (passwordValidationError.length > 0) {
      errors.password = passwordValidationError;
    }
  }

  // check if passwords do match
  if (!registrationForm.confirmPassword) {
    errors.confirmPassword = "This field is required";
  } else if (registrationForm.password !== registrationForm.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // name validation
  if (!registrationForm.name) {
    errors.name = "This field is required";
  }

  return errors;
};

const Register = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
      },
      validate,
      onSubmit: (registrationForm: RegistrationFormData): void => {
        dispatch(registerUser(registrationForm));
      },
    }
  );

  return (
    <div className="col-md-12 row justify-content-center">
      <div className="card card-container w-50">
        <form onSubmit={handleSubmit} className="m-2 registration-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form-control ${
                touched.email && errors.email ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <div className="validation-error">
                <small className="text-danger">{errors.email}</small>
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={`form-control ${
                touched.password && errors.password ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <div className="validation-error">
                <small className="text-danger">{errors.password}</small>
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className={`form-control ${
                touched.confirmPassword && errors.confirmPassword
                  ? "is-invalid"
                  : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <div className="validation-error">
                <small className="text-danger">{errors.confirmPassword}</small>
              </div>
            ) : null}
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`form-control ${
                touched.name && errors.name ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <div className="validation-error">
                <small className="text-danger">{errors.name}</small>
              </div>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

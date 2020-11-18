import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { isEmailValid } from "../shared/validators/validators";
import { LoginFormData, LoginFormErrors } from "../shared/interfaces/auth";
import { loginUser } from "../actions/auth";

// TODO: change this validate function to a yup schema perhaps
const validate = (loginForm: LoginFormData): LoginFormErrors => {
  const errors: LoginFormErrors = {};

  if (!loginForm.email) {
    errors.email = "This field is required";
  } else if (!isEmailValid(loginForm.email)) {
    errors.email = "Provided email is not valid";
  }

  if (!loginForm.password) {
    errors.password = "This field is required";
  }

  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validate,
      onSubmit: (loginForm: LoginFormData): void => {
        dispatch(loginUser(loginForm));
      },
    }
  );

  return (
    <div className="col-md-12 row justify-content-center">
      <div className="card card-container w-50">
        <form onSubmit={handleSubmit} className="m-2 login-form">
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

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

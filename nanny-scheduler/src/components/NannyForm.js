import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const StyledSection = styled.section`
  margin: 5px;
  padding: 5%;
  text-align: center;
`;

function ParentForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <StyledSection>
      <h2>
              Sign Up to be a Nanny
          </h2>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <div>
        {touched.first_name && errors.first_name && <p>{errors.first_name}</p>}
        <Field type='text' name='first_name' placeholder='First Name' />
      </div>
      <div>
        {touched.last_name && errors.last_name && <p>{errors.last_name}</p>}
        <Field type='text' name='last_name' placeholder='Last Name' />
      </div>
      <div>
        {touched.address && errors.address && <p>{errors.address}</p>}
        <Field type='text' name='address' placeholder='Address' />
      </div>
      <div>
        {touched.hourly_rate && errors.hourly_rate && <p>{errors.hourly_rate}</p>}
        <Field type='text' name='hourly_rate' placeholder='Hourly Rate' />
      </div>
      <div>
        {touched.can_drive && errors.can_drive && <p>{errors.can_drive}</p>}
        <Field type='boolean' name='can_drive' placeholder='Drivers Licence' />
      </div>
      <div>
        {touched.phone && errors.phone && <p>{errors.phone}</p>}
        <Field type='text' name='phone' placeholder='Phone Number' />
      </div>
      <Button disabled={isSubmitting} type='submit'>
        Submit
      </Button>
      </StyledSection>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, first_name, last_name, phone, address, hourly_rate, can_drive }) {
    return {
      email: email || '',
      password: password || '',
      first_name: first_name || '',
      last_name: last_name || '',
      address: address || '',
      hourly_rate: hourly_rate || '',
      can_drive: can_drive || '',
      phone: phone || ''
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://nanny-scheduler1.herokuapp.com/api/nanny/register", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(ParentForm);

export default FormikLoginForm;
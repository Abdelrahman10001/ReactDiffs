import React from 'react'
import { Formik, Form, Field } from "formik";

const MyForm = ({ state, action }) => {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Enter your name" />
      <button
        type="submit"
        onClick={() => {
          action(state, { name: "John" }); // Example action with preset data
        }}
      >
        Submit
      </button>
    </Form>
  );
};

export default MyForm
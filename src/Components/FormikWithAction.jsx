import { useActionState } from "react";
import { Formik, Form, Field } from "formik";

// Higher-Order Component that wraps Formik with useActionState
const withActionState = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    // Initialize useActionState with an action function that merges form data into the state
    const [state, action] = useActionState(() => ({
      initialState: { name: "" }, // Define your initial state here
      action: (currentState, formData) => {
        // Return updated state based on form submission
        return { ...currentState, ...formData };
      },
    }));

    // Guard against undefined state
    if (!state) {
      return null; // or provide a fallback UI
    }

    return (
      <Formik
        initialValues={state.initialState}
        onSubmit={(values, actions) => {
          action(values); // Call action with form values
          actions.setSubmitting(false); // Stop Formik submission state
        }}
      >
        {/* Pass the current state and action to the wrapped component */}
        <WrappedComponent {...props} state={state} action={action} />
      </Formik>
    );
  };

  // Set a display name for the component to avoid ESLint warnings
  EnhancedComponent.displayName = `withActionState(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return EnhancedComponent;
};

// Define the actual form component that will use the state and action
const MyForm = ({ state, action }) => (
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

// Wrap MyForm with the withActionState HOC
export default withActionState(MyForm);

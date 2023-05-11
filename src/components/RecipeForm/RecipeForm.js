import { Formik, Field, Form } from 'formik';

export const RecipeForm = () => {
  return (
    <Formik>
      <Form>
      <label>First Name
      <Field name="firstName" />
      </label>
        


      </Form>
    </Formik>
  );
};

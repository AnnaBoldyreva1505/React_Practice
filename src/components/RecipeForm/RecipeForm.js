import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { StyledForm, FormGroup, Input, ErrorMsg } from './RecipeForm.styled';

const RecipeSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  time: Yup.number().positive('> 0 PLZ!!!').required('Required'),
  servings: Yup.number().positive('> 0 PLZ!!!').required('Required'),
  calories: Yup.number().positive('> 0 PLZ!!!').required('Required'),

  image: Yup.string().url('Must be a valid url').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required'),
});

export const RecipeForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
        image: '',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormGroup>
          Recipe name
          <Input name="name" placeholder="Recipe name" type="text" />
          <ErrorMsg name="name" component="span" />
        </FormGroup>
        <FormGroup>
          Picture
          <Input name="pic" placeholder="picture url" type="text" />
          <ErrorMsg name="pic" component="span" />
        </FormGroup>

        <FormGroup>
          Time
          <Input name="time" placeholder="Time" type="number" />
          <ErrorMsg name="time" component="span" />
        </FormGroup>

        <FormGroup>
          Servings
          <Input name="servings" placeholder="Servings" type="number" />
          <ErrorMsg name="servings" component="span" />
        </FormGroup>

        <FormGroup>
          Calories
          <Input name="calories" placeholder="Calories" type="number" />
          <ErrorMsg name="calories" component="span" />
        </FormGroup>

        <Input name="difficulty" as="select">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <ErrorMsg name="difficulty" component="span" />
        </Input>

        <button type="submit">Add</button>
      </StyledForm>
    </Formik>
  );
};

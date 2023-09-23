import { Formik, Field, Form } from 'formik';
import scss from './personal.module.scss';

export const PersonalForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async values => {
        await new Promise(r => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className={scss.form}>
        <label htmlFor="firstName" className={scss.label}>
          Name:
          <Field
            className={scss.input}
            id="firstName"
            name="firstName"
            placeholder=""
          />
        </label>

        <label htmlFor="email" className={scss.label}>
          Email:
          <Field
            id="email"
            name="email"
            placeholder=""
            type="email"
            className={scss.input}
          />
        </label>

        <label htmlFor="birthday" className={scss.label}>
          Birthday:
          <Field
            id="birthday"
            name="birthday"
            placeholder=""
            type="date"
            className={scss.input}
          />
        </label>

        <label htmlFor="phone" className={scss.label}>
          Phone:
          <Field
            id="phone"
            name="phone"
            placeholder="+38"
            type="phone"
            className={scss.input}
          />
        </label>

        <label htmlFor="city" className={scss.label}>
          City:
          <Field id="city" name="city" placeholder="" className={scss.input} />
        </label>
        <button className={scss.button} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};

import React from 'react';
import styles from './signUpPage.module.css';
import { FormikErrors, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Input } from '@mui/material';

interface FormInputs {
  name: string;
  login: string;
  password: string;
}

const validate = (values: FormInputs) => {
  const errors: FormikErrors<FormInputs> = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 4) {
    errors.name = 'Name must consist of 4 characters or more';
  }

  if (!values.login) {
    errors.login = 'Required';
  } else if (values.login.length < 4) {
    errors.login = 'Login must consist of 4 characters or more';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must consist of 6 characters or more';
  }

  return errors;
};

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      try {
        fetch('https://aqueous-springs-38949.herokuapp.com//signup', {
          body: JSON.stringify(values),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className={styles.signUpPage}>
      <Typography variant="h5" component="h1" mt={2} mb={2}>
        Sign Up:
      </Typography>
      <form className={styles.signUpForm} onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          Enter your name:
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </label>
        {formik.touched.name && formik.errors.name ? (
          <Typography className={styles.error}>{formik.errors.name}</Typography>
        ) : null}
        <label htmlFor="login">
          Enter your login:
          <Input
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
        </label>
        {formik.touched.login && formik.errors.login ? (
          <Typography className={styles.error}>{formik.errors.login}</Typography>
        ) : null}
        <label htmlFor="password">
          Enter your password:
          <Input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </label>
        {formik.touched.password && formik.errors.password ? (
          <Typography className={styles.error}>{formik.errors.password}</Typography>
        ) : null}
        <Button sx={{ marginBottom: 2 }} variant="outlined" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;

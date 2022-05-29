import React from 'react';
import styles from './signInPage.module.css';
import { FormikErrors, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Input } from '@mui/material';

interface FormInputs {
  login: string;
  password: string;
}

const validate = (values: FormInputs) => {
  const errors: FormikErrors<FormInputs> = {};

  if (!values.login) {
    errors.login = 'Required';
  } else if (values.login.length < 4) {
    errors.login = 'Invalid login';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Invalid password';
  }

  try {
    const response = fetch('https://aqueous-springs-38949.herokuapp.com/signin', {
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    console.log(response);
  } catch (err) {
    console.log(err);
    errors.password = 'Incorrect login or password';
  }
  return errors;
};

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validate,
    onSubmit: () => {
      localStorage.setItem('isAuth', 'true');
      navigate('/');
    },
  });

  return (
    <div className={styles.signInPage}>
      <Typography variant="h5" component="h1" mt={2} mb={2}>
        Sign Up:
      </Typography>
      <form className={styles.signInForm} onSubmit={formik.handleSubmit}>
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

export default SignInPage;

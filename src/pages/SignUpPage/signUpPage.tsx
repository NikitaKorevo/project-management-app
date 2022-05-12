import React from 'react';
import styles from './signUpPage.module.css';
import { useFormik } from 'formik';

const SignUpPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      login: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.signUpPage}>
      <p>SignUpPage</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          Enter your name:
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </label>
        <label htmlFor="login">
          Enter your login:
          <input
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
        </label>
        <label htmlFor="password">
          Enter your password:
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;

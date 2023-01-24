import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styles from '../styles/components/contact-form.module.scss';
import Btn from './Btn';
import { BtnTypes, FormValues } from '../types/types';
import axios from 'axios';

const phoneRegExp = new RegExp(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/)
const validationSchema = yup.object().shape({
  name: yup.string().required('Insert your name, please').min(3, 'Too short name'),
  phone: yup.string().required('Insert your phone number, please').min(5, 'Too short phone number')
    .matches(phoneRegExp, 'invalid phone number'),
  email: yup.string().required('Insert your e-mail, please').email('Invalid e-mail address'),
});

export default function ContactForm(): JSX.Element {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        phone: '',
        email: '',
      }}

      onSubmit={async (values: FormValues, { resetForm }) => {
        try {
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3004/feedback',
            data: {
              name: values.name,
              phone: values.phone,
              email: values.email,
            }
          });
          console.log(response);
        } catch (error) {
          alert(error);
          console.error(error);
        }
        resetForm();
      }}
    >
      {({ errors, touched }) => {
        return <Form className={styles.form}>
          <label>
            <Field className={`${(errors.name && touched.name) ? styles.inputError : styles.input} p1`}
              name='name' type='text' placeholder='Name' />
            {errors.name && touched.name && <div className={`${styles.errorDescription} p2`}>{errors.name}</div>}
          </label>
          <label>
            <Field className={`${(errors.phone && touched.phone) ? styles.inputError : styles.input} p1`}
              name='phone' type='text' placeholder='Phone' />
            {errors.phone && touched.phone && <div className={`${styles.errorDescription} p2`}>{errors.phone}</div>}
          </label>
          <label>
            <Field className={`${(errors.email && touched.email) ? styles.inputError : styles.input} p1`}
              name='email' type='text' placeholder='E-mail' />
            {errors.email && touched.email && <div className={`${styles.errorDescription} p2`}>{errors.email}</div>}
          </label>
          <Btn
            class={styles.submitBtn}
            text='Send'
            width={497}
            heigth={72}
            type={BtnTypes.SUBMIT}
          />
        </Form>
      }}
    </Formik>
  );
}

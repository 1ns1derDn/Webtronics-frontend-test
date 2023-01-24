import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styles from '../styles/components/contact-form.module.scss';
import Btn from './Btn';
import { BtnTypes, FormValues } from '../types/types';

const validationSchema = yup.object().shape({
  name: yup.string().required('Insert your name, please'),
  phone: yup.string().required('Insert your phone number, please'),
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

      onSubmit={(values: FormValues) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => {
        return <Form className={styles.form}>
          <Field className={`${styles.input} p1`} name='name' type='text' placeholder='Name' />
          <Field className={`${styles.input} p1`} name='phone' type='tel' placeholder='Phone' />
          <Field className={`${styles.input} p1`} name='email' type='email' placeholder='E-mail' />
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

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (values: FormValues) => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:3004/feedback',
        data: {
          name: values.name,
          phone: values.phone,
          email: values.email,
        }
      });
    } catch (error) {
      alert(`${error}, Please download distributive and run server with "yarn server" command`);
      console.error(error);
    }
    reset();
  };

  return (

    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          className={`${(errors.name) ? styles.inputError : styles.input} p1`}
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        {errors.name && <div className={`${styles.errorDescription} p2`}>{errors.name.message}</div>}
      </label>
      <label>
        <input
          className={`${(errors.phone) ? styles.inputError : styles.input} p1`}
          type='text'
          placeholder='Phone'
          {...register('phone')}
        />
        {errors.phone && <div className={`${styles.errorDescription} p2`}>{errors.phone.message}</div>}
      </label>
      <label>
        <input
          className={`${(errors.email) ? styles.inputError : styles.input} p1`}
          type='text'
          placeholder='E-mail'
          {...register('email')}
        />
        {errors.email && <div className={`${styles.errorDescription} p2`}>{errors.email.message}</div>}
      </label>
      <Btn
        class={styles.submitBtn}
        text='Send'
        width={497}
        heigth={72}
        type={BtnTypes.SUBMIT}
      />
    </form>
  );
}

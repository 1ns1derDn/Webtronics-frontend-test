import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import 'yup-phone';
import Button from '@components/Button';
import InputText from '@components/InputText';
import http from '@utils/http';
import styles from './ContactUs.module.scss';

const defaultValues = {
  name: '',
  phone: '',
  email: '',
};

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  phone: yup
    .string()
    .phone('RU', false, 'Invalid format')
    .required('This field is required'),
  email: yup
    .string()
    .email('Invalid format')
    .required('This field is required'),
});

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await setIsLoading(true);
      await http.post('feedback', data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <section className={styles.contactUs}>
      <div className={styles.content}>
        <h2 id="contact">Contact us</h2>
        <p className={styles.subtitle}>
          Do you have any kind of help please contact with us.
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputs}>
            <InputText
              placeholder="Name"
              {...register('name')}
              error={errors.name?.message}
            />
            <InputText
              placeholder="Phone"
              type="tel"
              {...register('phone')}
              error={errors.phone?.message}
            />
            <InputText
              placeholder="E-mail"
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
          <Button className={styles.button} type="submit" disabled={isLoading}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

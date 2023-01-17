import Button from '@components/Button';
import InputText from '@components/InputText';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.content}>
        <h2>Contact us</h2>
        <p className={styles.subtitle}>
          Do you have any kind of help please contact with us.
        </p>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <InputText placeholder="Name" />
            <InputText placeholder="Phone" />
            <InputText placeholder="E-mail" />
          </div>
          <Button className={styles.button} type="submit">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

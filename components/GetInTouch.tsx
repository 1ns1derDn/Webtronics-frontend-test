import React from 'react';
import styles from '../styles/pages/get-in-touch.module.scss';
import ContactForm from './ContactForm';

export default function GetInTouch(): JSX.Element {
  return (
    <section id='get-in-touch' className={styles.getInTouch}>
      <div className={styles.border}>
        <h2 className={styles.heading}>Contact us</h2>
        <p className={`${styles.description} p1`}>Do you have any kind of help please contact with us.</p>
        <ContactForm />
      </div>
    </section>
  );
}

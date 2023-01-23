import React from 'react';
import styles from '../styles/pages/mentor.module.scss';

export default function Mentor(
  props: { class: string, src: string, heading: string, text: string }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class}`}>
      <div className={styles.border}>
        <div className={styles.imgWrapper}>
          <img src={props.src} alt='mentoor' />
        </div>
      </div>
      <div className={styles.descrioption}>
        <h4>{props.heading}</h4>
        <p className='p2'>{props.text}</p>
      </div>
    </div>
  );
}

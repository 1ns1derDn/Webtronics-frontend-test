import React from 'react';
import styles from '../styles/pages/program.module.scss';

export default function Program(
  props: { class: string, src: string, heading: string }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class}`}>
      <div className={styles.border}>
      </div>
      <div className={styles.imgWrapper}>
        <img src={props.src} alt='program' />
      </div>
      <h4 className={styles.heading}>{props.heading}</h4>
    </div>
  );
}

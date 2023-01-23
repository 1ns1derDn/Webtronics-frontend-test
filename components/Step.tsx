import React from 'react';
import styles from '../styles/pages/step.module.scss';

export default function Step(
  props: { class: string, stepNumber: number, heading: string, text: string, isLeft: boolean }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class}`}>
      <div className={`${styles.border} ${props.isLeft ? styles.borderLeft : styles.borderRight}`}>
      </div>
      <div className={`${styles.description} ${props.isLeft ? styles.descriptionLeft : styles.descriptionRight}`}>
        <h4 className={styles.step}>Step {props.stepNumber}</h4>
        <h3 className={styles.heading}>{props.heading}</h3>
        <p className={`${styles.text} p1`}>{props.text}</p>
      </div>
    </div>
  );
}

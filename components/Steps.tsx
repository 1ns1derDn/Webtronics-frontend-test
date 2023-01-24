import React from 'react';
import styles from '../styles/pages/steps.module.scss';
import Step from './Step';

export default function Steps(): JSX.Element {
  return (
    <section id='steps' className={styles.steps}>
      <h2 className={styles.heading}>Steps</h2>
      <div className={styles.wrapper}>
        <div className={styles.side}>
          <Step
            class=''
            stepNumber={1}
            heading='Introduction to Front-End'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={true}
          />
          <Step
            class=''
            stepNumber={3}
            heading='Introduction to Front-End'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={true}
          />
          <Step
            class=''
            stepNumber={5}
            heading='Introduction to Front-End'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={true}
          />
        </div>
        <div className={styles.center}>
          <img src='./assets/svg/axis.svg' alt='axis' />
        </div>
        <div className={`${styles.side} ${styles.sideRight}`}>
          <Step
            class=''
            stepNumber={2}
            heading='Overview of Development'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={false}
          />
          <Step
            class=''
            stepNumber={4}
            heading='Overview of Development'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={false}
          />
          <Step
            class=''
            stepNumber={6}
            heading='Overview of Development'
            text='Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
}

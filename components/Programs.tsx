import React from 'react';
import styles from '../styles/components/programs.module.scss';
import Program from './Program';

export default function Programs(): JSX.Element {
  return (
    <section id='programs' className={styles.programs}>
      <h2 className={styles.heading}>Programming technologies</h2>
      <p className={`${styles.description} p1`}>
        By the end, you’ll have the portfolio and interview skills you need to start your new career.
      </p>
      <div className={styles.wrapper}>
        <Program
          class=''
          src='./assets/img/program-01.png'
          heading='Angular'
        />
        <Program
          class=''
          src='./assets/img/program-02.png'
          heading='React'
        />
        <Program
          class=''
          src='./assets/img/program-03.png'
          heading='Vue.js'
        />
        <Program
          class=''
          src='./assets/img/program-04.png'
          heading='JavaScript'
        />
      </div>
    </section>
  );
}

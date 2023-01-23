import React from 'react';
import styles from '../styles/pages/about.module.scss'
import Mentor from './Mentor';

export default function About(): JSX.Element {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Us</h2>
      <div id='about' className={styles.content}>
        <div className={styles.mentorsTree}>
          <h3 className={styles.subheading}>Mentors</h3>
          <img className={styles.tree} src='./assets/svg/lines.svg' alt='lines' />
          <div className={styles.mentors}>
            <Mentor
              class={styles.mentor01}
              src='./assets/img/mentor-01.jpg'
              heading='Wade Warren'
              text='Front-end engineers work closely with designers'
            />
            <Mentor
              class={styles.mentor02}
              src='./assets/img/mentor-02.jpg'
              heading='Kristin Watson'
              text='Front-end engineers work closely with designers'
            />
            <Mentor
              class={styles.mentor03}
              src='./assets/img/mentor-03.jpg'
              heading='Robert Fox'
              text='Front-end engineers work closely with designers'
            />
          </div>
        </div>
        <p className={`${styles.description} p1`}>
          Front-end engineers work closely with designers to make websites beautiful,
          functional, and fast. This Career Path will teach you not only the necessary
          languages and technologies, but how to think like a front-end engineer, too.
        </p>
      </div>
    </section>
  );
}

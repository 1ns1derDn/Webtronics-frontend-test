import React from "react";
import styles from '../styles/pages/showcase.module.scss';
import Btn from "./Btn";

export default function Showcase(): JSX.Element {
  return (
    <section className={styles.showcase}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}><span>Front-End</span><span className={styles.secondH1Word}>Developer</span></h1>
        <p className={`${styles.description} p1`}>
          Make UIs and websites beautiful, functional, and fast.
          Cover all the topics that expensive bootcamps teach (and more).
        </p>
        <h3 className={styles.subheading}>Courses</h3>
        <Btn
          class={styles.btn}
          text={'Start my career change'}
          width={288}
          heigth={74}
        />
      </div>
    </section>
  );
}

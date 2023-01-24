import React from 'react';
import styles from '../styles/components/questions.module.scss';
import Question from './Question';

export default function Questions(): JSX.Element {
  return (
    <section id='questions' className={styles.questions}>
      <h2 className={styles.heading}>Frequently Asked<br />Questions</h2>
      <div className={styles.wrapper}>
        <div className={styles.question}>
          <p className={`${styles.description} p1`}>
            Do you have any kind of questions? We are here to help.
          </p>
          <img src='./assets/svg/question-mark.svg' alt='Question mark' />
        </div>
        <div className={styles.accordion}>

          <Question
            class=''
            question='What is the price?'
            answer={`Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`}
            isOpened={true}
          />

          <Question
            class=''
            question='What is the price?'
            answer={`Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`}
            isOpened={false}
          />

          <Question
            class=''
            question='What is the price?'
            answer={`Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`}
            isOpened={false}
          />

          <Question
            class=''
            question='What is the price?'
            answer={`Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`}
            isOpened={false}
          />

          <Question
            class=''
            question='What is the price?'
            answer={`Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.`}
            isOpened={false}
          />
        </div>
      </div>
    </section>
  );
}

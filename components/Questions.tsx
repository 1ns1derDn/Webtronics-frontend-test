import React from 'react';
import { useSelector } from 'react-redux';
import { questionsData } from '../data/questionsData';
import { RootState } from '../store/store';
import styles from '../styles/components/questions.module.scss';
import Question from './Question';

export default function Questions(): JSX.Element {
  const { openedQuestion } = useSelector((state: RootState) => state.questions);

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

          {questionsData.map((data) =>
            <Question
              id={data.id}
              key={data.id}
              class={data.class}
              question={data.question}
              answer={data.answer}
              isOpened={openedQuestion === data.id}
            />)}

        </div>
      </div>
    </section>
  );
}

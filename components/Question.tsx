import React from 'react';
import { useDispatch } from 'react-redux';
import { select } from '../store/slices/questionsSlice';
import styles from '../styles/components/question.module.scss';

export default function Question(
  props: { id: number, class: string, question: string, answer: string, isOpened: boolean }
): JSX.Element {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(select(props.id));
  }

  return (
    <div key={props.id} className={`${styles.wrapper} ${props.class} ${props.isOpened ? styles.wrapperOpened : styles.wrapperClosed}`}>
      <div className={`${styles.border} ${props.isOpened ? styles.borderOpened : styles.borderClosed}`}>
      </div>
      <button
        className={`${styles.collapseBtn} ${props.isOpened ? styles.collapseBtnLeft : styles.collapseBtnRight}`}
        onClick={handleClick}
      >
        {props.isOpened
          ?
          <img src='./assets/svg/plus.svg' alt='plus' />
          :
          <img src='./assets/svg/minus.svg' alt='minus' />
        }
      </button>
      <h4 className={styles.heading}>{props.question}</h4>
      <p className={`${styles.answer} p1`}>{props.answer}</p>
    </div>
  );
}

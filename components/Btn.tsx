import React from 'react';
import styles from '../styles/pages/btn.module.scss';

export default function Btn(
  props: { class: string, text: string, width: number, heigth: number }
): JSX.Element {
  return (
    <button
      className={`${styles.btn} ${props.class}`}
      type='button'
      style={{ width: `${props.width}px`, height: `${props.heigth}px` }}
    >
      {props.text}
    </button>
  );
}

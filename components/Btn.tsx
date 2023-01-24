import React from 'react';
import styles from '../styles/pages/btn.module.scss';
import { BtnTypes } from '../types/types';

export default function Btn(
  props: { class: string, text: string, width: number, heigth: number, type: BtnTypes }
): JSX.Element {
  return (
    <button
      className={`${styles.btn} ${props.class}`}
      type={props.type}
      style={{ width: `${props.width}px`, height: `${props.heigth}px` }}
    >
      {props.text}
    </button>
  );
}

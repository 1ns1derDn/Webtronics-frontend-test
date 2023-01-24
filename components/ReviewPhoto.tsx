import React from 'react';
import styles from '../styles/pages/review-photo.module.scss';

export default function ReviewPhoto(
  props: { class: string, src: string, offset: number, isOpened: boolean }
): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${props.class} ${props.isOpened ? styles.wrapperOpened : styles.wrapperClosed}`}>
      <div className={`${styles.border} ${props.isOpened ? styles.borderOpened : styles.borderClosed}`}></div>
      <div className={`${styles.imgWrapper} ${props.isOpened ? styles.imgWrapperOpened : styles.imgWrapperClosed}`}>
        <img src={props.src} alt='program' style={{ marginLeft: props.offset }} />
      </div>
    </div>
  );
}

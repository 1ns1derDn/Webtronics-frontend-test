import React from 'react';
import { useDispatch } from 'react-redux';
import { selectReview } from '../store/slices/reviewsSlice';
import styles from '../styles/components/review-photo.module.scss';

export default function ReviewPhoto(
  props: {
    id: number,
    class: string,
    classOpened: string,
    classClosed: string,
    src: string,
    offset: number,
    isOpened: boolean
  }
): JSX.Element {

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(selectReview(props.id));
  }

  return (
    <div
      className={`${styles.wrapper} ${props.class} ${props.isOpened ? styles.wrapperOpened : styles.wrapperClosed}`}
      onClick={handleClick}
    >
      <div className={`${styles.border} ${props.isOpened ? styles.borderOpened : styles.borderClosed}`}></div>
      <div className={`${styles.imgWrapper} ${props.isOpened ? styles.imgWrapperOpened : styles.imgWrapperClosed}`}>
        <img className={`${props.isOpened ? props.classOpened : props.classClosed}`}
          src={props.src} alt='program' style={{ marginLeft: props.isOpened ? 0 : props.offset }} />
      </div>
    </div>
  );
}

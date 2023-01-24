import React from 'react';
import styles from '../styles/pages/review.module.scss';
import ReviewPhoto from './ReviewPhoto';

export default function Review(): JSX.Element {
  return (
    <section className={styles.review}>
      <h2 className={styles.heading}>Review</h2>
      <div className={styles.wrapper}>
        <div className={styles.reviewContent}>
          <h4 className={styles.title}>Best courses ever</h4>
          <p className={`${styles.text} p1`}>
            Good course, up to this point, still ongoing.
            The only downside, why I gave 4,5 stars, because the "teacher"
            sometimes feel like, he is lost, and takes up quite a time,
            to correct himself, and check back etc.
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselPanel}>
            <div className={styles.carouselCounter}>
              <h4>1/</h4>
              <p className='p1'>3</p>
            </div>
            <div className={styles.carouselControls}>
              <button className={styles.leftBtn} type='button'>
              </button>
              <button className={styles.rightBtn} type='button'>
              </button>
            </div>
          </div>
          <div className={styles.carouselImgs}>

            <ReviewPhoto
              class=''
              src='./assets/img/man-01.jpg'
              offset={0}
              isOpened={true}
            />

            <ReviewPhoto
              class=''
              src='./assets/img/man-02.jpg'
              offset={0}
              isOpened={false}
            />

            <ReviewPhoto
              class=''
              src='./assets/img/man-03.jpg'
              offset={-80}
              isOpened={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviewsData } from '../data/reviewsData';
import { nextReview, prevReview } from '../store/slices/reviewsSlice';
import { RootState } from '../store/store';
import styles from '../styles/components/review.module.scss';
import ReviewPhoto from './ReviewPhoto';

export default function Review(): JSX.Element {
  const dispatch = useDispatch();
  const { selectedReview } = useSelector((state: RootState) => state.rewiews);
  const order = [];
  let reviewId = selectedReview;
  for (let i = 0; i <= reviewsData.length - 1; i += 1) {
    if (reviewId < reviewsData.length) {
      order.push(reviewId);
    } else {
      order.push(reviewId - reviewsData.length);
    }
    reviewId += 1;
  }

  function hanldeLeftClick() {
    dispatch(prevReview());
  }

  function hanldeRightClick() {
    dispatch(nextReview());
  }

  return (
    <section className={styles.review}>
      <h2 className={styles.heading}>Review</h2>
      <div className={styles.wrapper}>
        <div className={styles.reviewContent}>
          <h4 className={styles.title}>{reviewsData[selectedReview].title}</h4>
          <p className={`${styles.text} p1`}>
            {reviewsData[selectedReview].text}
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.carouselPanel}>
            <div className={styles.carouselCounter}>
              <h4>{reviewsData[selectedReview].id + 1}/</h4>
              <p className='p1'>3</p>
            </div>
            <div className={styles.carouselControls}>
              <button className={styles.leftBtn} type='button' onClick={hanldeLeftClick}>
              </button>
              <button className={styles.rightBtn} type='button' onClick={hanldeRightClick}>
              </button>
            </div>
          </div>
          <div className={styles.carouselImgs}>

            {order.map((id, index) =>
              <ReviewPhoto
                id={reviewsData[id].id}
                key={reviewsData[id].id}
                class={reviewsData[id].class}
                classOpened={reviewsData[id].classOpened}
                classClosed={reviewsData[id].classClosed}
                src={reviewsData[id].src}
                offset={reviewsData[id].offset}
                isOpened={index === 0}
              />
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import styles from '../styles/components/gallery.module.scss';

export default function Gallery(): JSX.Element {
  return (
    <section className={styles.gallery}>
      <h2 className={styles.heading}>Gallery</h2>
      <div className={styles.wrapper}>
        <p className={`${styles.text1} p1`}>
          By the end of this course, you will be able to develop and publish
          your very own Google Chrome extension! In this course we will
          focus on coding exercises and projects.
        </p>
        <p className={`${styles.text2} p1`}>
          If you would like to learn web development and get a job in the tech industry,
          you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and
          more with over 15 hours of HD video tutorials! This course was designed to be
          extremely beginner friendly. We will begin with the very basics of HTML
          and build a simple web page.
        </p>
        <div className={`${styles.imgWrapper} ${styles.imgWrapper1}`}>
          <img src='./assets/img/gallery-01.jpg' alt='gallery-01' />
        </div>
        <div className={`${styles.imgWrapper} ${styles.imgWrapper2}`}>
          <img src='./assets/img/gallery-02.jpg' alt='gallery-02' />
        </div>
        <div className={`${styles.imgWrapper} ${styles.imgWrapper3}`}>
          <img src='./assets/img/gallery-03.jpg' alt='gallery-03' />
        </div>
        <div className={`${styles.imgWrapper} ${styles.imgWrapper4}`}>
          <img src='./assets/img/gallery-04.jpg' alt='gallery-04' />
        </div>
      </div>
    </section>
  );
}

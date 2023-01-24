import React from 'react';
import styles from '../styles/components/landing.module.scss';
import About from './About';
import Footer from './Footer';
import Gallery from './Gallery';
import GetInTouch from './GetInTouch';
import Header from './Header';
import Programs from './Programs';
import Questions from './Questions';
import Review from './Review';
import Showcase from './Sowcase';
import Steps from './Steps';

export default function Landing(): JSX.Element {
  return (
    <main className={styles.landing}>
      <div className={styles.bgShiningImg}>
        <img className={styles.star01} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star02} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star03} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star04} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star05} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star06} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star07} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star08} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star09} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star10} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star11} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star12} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star13} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star14} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star15} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star16} src={'./assets/svg/star.svg'} alt='star' />
        <img className={styles.star17} src={'./assets/svg/star.svg'} alt='star' />
      </div>
      <Header />
      <Showcase />
      <About />
      <Programs />
      <Steps />
      <Questions />
      <Review />
      <Gallery />
      <GetInTouch />
      <Footer />
    </main>
  );
}

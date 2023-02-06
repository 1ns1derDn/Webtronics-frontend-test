import React from 'react';
import styles from '../styles/components/header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.bg}></div>
      <a className={styles.linkLogo} href='#'>
        <img className={styles.logo} src='./assets/svg/logo-webtronics.svg' alt='Webtronics' />
      </a>
      <nav className={styles.nav}>
        <a className={styles.link + ' p1'} href='#about'>About</a>
        <a className={styles.link + ' p1'} href='#programs'>Programs</a>
        <a className={styles.link + ' p1'} href='#steps'>Steps</a>
        <a className={styles.link + ' p1'} href='#questions'>Questions</a>
        <a className={styles.link + ' p1'} href='#get-in-touch'>Get in touch</a>
      </nav>
    </header>
  );
}

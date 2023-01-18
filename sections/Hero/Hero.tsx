import Button from '@components/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.layerOne}>
        <h1>Front-End</h1>
        <p>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).{' '}
        </p>
      </div>
      <div className={styles.layerTwo}>
        <Button>Start my career change</Button>
        <h1>Developer</h1>
      </div>
      <h3>Courses</h3>
    </section>
  );
};

export default Hero;

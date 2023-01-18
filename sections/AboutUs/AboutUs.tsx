import Image, { StaticImageData } from 'next/image';
import mentor1 from '@assets/images/mentor-1.jpg';
import mentor2 from '@assets/images/mentor-2.jpg';
import mentor3 from '@assets/images/mentor-3.jpg';
import styles from './AboutUs.module.scss';

type Mentor = {
  name: string;
  title: string;
  image: StaticImageData;
};

const mentors: Mentor[] = [
  {
    name: 'Wade Warren',
    title: 'Front-end engineers work closely with designers',
    image: mentor1,
  },
  {
    name: 'Kristin Watson',
    title: 'Front-end engineers work closely with designers',
    image: mentor2,
  },
  {
    name: 'Robert Fox',
    title: 'Front-end engineers work closely with designers',
    image: mentor3,
  },
];

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <h2>About Us</h2>
      <div className={styles.row}>
        <div className={styles.graph}>
          <h3>Mentors</h3>
          <ul>
            {mentors.map((mentor) => (
              <li key={mentor.name}>
                <div className={styles.imageContainer}>
                  <Image
                    className={styles.image}
                    src={mentor.image}
                    alt={mentor.name}
                  />
                </div>
                <h4>{mentor.name}</h4>
                <small>{mentor.title}</small>
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.description}>
          Front-end engineers work closely with designers to make websites
          beautiful, functional, and fast. This Career Path will teach you not
          only the necessary languages and technologies, but how to think like a
          front-end engineer, too.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

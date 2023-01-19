import Image, { StaticImageData } from 'next/image';
import angularIcon from '@assets/icons/angular.png';
import jsIcon from '@assets/icons/js.png';
import reactIcon from '@assets/icons/react.png';
import vueIcon from '@assets/icons/vue.png';
import styles from './Technologies.module.scss';

type Technology = {
  name: string;
  image: StaticImageData;
};

const technologies: Technology[] = [
  {
    name: 'Angular',
    image: angularIcon,
  },
  {
    name: 'React',
    image: reactIcon,
  },
  {
    name: 'Vue',
    image: vueIcon,
  },
  {
    name: 'JavaScript',
    image: jsIcon,
  },
];

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <h2 id="technologies">Programming technologies</h2>
      <p className={styles.subtitle}>
        By the end, you’ll have the portfolio and interview skills you need to
        start your new career.
      </p>
      <ul>
        {technologies.map((technology) => (
          <li key={technology.name}>
            <Image
              className={styles.image}
              src={technology.image}
              alt={technology.name}
            />
            <h4>{technology.name}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;

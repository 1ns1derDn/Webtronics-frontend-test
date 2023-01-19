import styles from './Steps.module.scss';

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: 'Introduction to Front-End',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.',
  },
  {
    title: 'Overview of Development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  },
  {
    title: 'Introduction to Front-End',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  },
  {
    title: 'Overview of Development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  },
  {
    title: 'Introduction to Front-End',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  },
  {
    title: 'Overview of Development',
    description:
      'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ',
  },
];

const Steps = () => {
  return (
    <section className={styles.steps}>
      <h2 id="steps">Steps</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <div className={styles.card}>
              <h4>Step {index + 1}</h4>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Steps;

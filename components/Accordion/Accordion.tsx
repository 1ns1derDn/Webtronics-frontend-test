import cn from 'classnames';
import { FC, useState } from 'react';
import MinusIcon from '@assets/icons/minus.svg?component';
import PlusIcon from '@assets/icons/plus.svg?component';
import styles from './Accordion.module.scss';

type AccordionItem = {
  question: string;
  answer: string;
};

interface Props {
  items: AccordionItem[];
}

const Accordion: FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => (
        <li className={cn(activeIndex === index && styles.active)} key={index}>
          <button
            aria-label={activeIndex === index ? 'Close' : 'Expand'}
            onClick={() =>
              setActiveIndex((prev) => (index === prev ? undefined : index))
            }
          >
            {activeIndex === index ? <PlusIcon /> : <MinusIcon />}
          </button>
          <h4>{item.question}</h4>
          <p>{item.answer}</p>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;

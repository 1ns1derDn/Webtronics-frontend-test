import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';
import ArrowHeadIcon from '@assets/icons/arrow-head.svg?component';
import styles from './Carousel.module.scss';

type CarouselItem = {
  title: string;
  text: string;
  image: StaticImageData;
};

interface Props {
  items: CarouselItem[];
}

const Carousel: FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageOrder, setImageOrder] = useState(
    [...new Array(items.length)].map((_, i) => i)
  );

  const changeActiveIndex = (delta: number) => {
    const newActiveIndex = (activeIndex + delta + items.length) % items.length;
    const newImageOrder = [...imageOrder];
    const indexToSwap = newImageOrder.indexOf(newActiveIndex);
    [newImageOrder[0], newImageOrder[indexToSwap]] = [
      newImageOrder[indexToSwap],
      newImageOrder[0],
    ];
    setActiveIndex(newActiveIndex);
    setImageOrder(newImageOrder);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.left}>
        <h4>{items[activeIndex]?.title}</h4>
        <p>{items[activeIndex]?.text}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.counter}>
            <h4>
              {activeIndex + 1}/<span>{items.length}</span>
            </h4>
          </div>
          <div className={styles.controls}>
            <button
              aria-label="Previous review"
              onClick={() => changeActiveIndex(-1)}
            >
              <ArrowHeadIcon />
            </button>
            <button
              aria-label="Next review"
              onClick={() => changeActiveIndex(1)}
            >
              <ArrowHeadIcon />
            </button>
          </div>
        </div>
        <ul className={styles.images}>
          {imageOrder.map((index) => (
            <li key={index}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.image}
                  src={items[index].image}
                  alt=""
                  style={{
                    objectFit: 'cover',
                  }}
                  fill
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;

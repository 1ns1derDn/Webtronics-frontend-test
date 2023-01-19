import { StaticImageData } from 'next/image';
import review1 from '@assets/images/review-1.jpg';
import review2 from '@assets/images/review-2.jpg';
import review3 from '@assets/images/review-3.jpg';
import Carousel from '@components/Carousel';
import styles from './Review.module.scss';

type ReviewItem = {
  title: string;
  text: string;
  image: StaticImageData;
};

const reviews: ReviewItem[] = [
  {
    title: 'Best courses ever',
    text: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    image: review1,
  },
  {
    title: 'Amazing teaching',
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    image: review2,
  },
  {
    title: 'Simple and easy',
    text: 'I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.',
    image: review3,
  },
];

const Review = () => {
  return (
    <section className={styles.review}>
      <h2 id="review">Review</h2>
      <Carousel items={reviews} />
    </section>
  );
};

export default Review;

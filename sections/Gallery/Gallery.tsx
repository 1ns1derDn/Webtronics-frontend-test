import Image from 'next/image';
import gallery1 from '@assets/images/gallery-1.jpg';
import gallery2 from '@assets/images/gallery-2.jpg';
import gallery3 from '@assets/images/gallery-3.jpg';
import gallery4 from '@assets/images/gallery-4.jpg';
import styles from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <h2 id="gallery">Gallery</h2>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <p>
            By the end of this course, you will be able to develop and publish
            your very own Google Chrome extension! In this course we will focus
            on coding exercises and projects.
          </p>
          <Image className={styles.image} src={gallery4} alt="developers 4" />
        </div>
        <div className={styles.middle}>
          <div className={styles.top}>
            <Image className={styles.image} src={gallery1} alt="developers 1" />
            <div className={styles.rightSide}>
              <Image
                className={styles.image}
                src={gallery2}
                alt="developers 2"
              />
              <Image
                className={styles.image}
                src={gallery3}
                alt="developers 3"
              />
            </div>
          </div>
          <p>
            If you would like to learn web development and get a job in the tech
            industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video
            tutorials! This course was designed to be extremely beginner
            friendly. We will begin with the very basics of HTML and build a
            simple web page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

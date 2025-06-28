import React from 'react';
import Image from 'next/image';
// import Header from '../components/Header'; // No longer needed here
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.aboutContent}>
        <div className={styles.textContainer}>
          <p>
            Namaste, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus sapien eleifend lorem bibendum, et scelerisque mauris iaculis. Duis vel lectus a velit ornare eleifend. Sed consectetur velit eu laoreet vulputate. Nam a nisl nibh. Aenean tortor leo, consectetur id lobortis sed, bibendum non erat. Aliquam erat volutpat. Fusce iaculis, tellus et porttitor semper, tellus mi tempor magna, vitae rhoncus nibh nibh id mauris. Duis eu semper risus. Nam fringilla lectus aliquet sollicitudin pharetra. Nullam feugiat magna vel nunc commodo, nec finibus quam pulvinar.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/portrait.png" 
            alt="that's me"
            width={300}
            height={375}
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.cardsContainer}>
        <div className={styles.cardOrange}></div>
        <div className={styles.cardBlue}></div>
      </section>
    </main>
  );
};

export default AboutPage; 
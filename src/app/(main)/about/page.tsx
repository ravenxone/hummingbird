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
            Namaste! 
            <br/> I am Divyansh, a reader, engineer, and tinkerer. I write recipies, code, and notes on design & engineering. I am working on Stencil, to explore how humans and AIs can collaborate! Slide in <a href="https://x.com/divyaanshgoel"> @divyaanshgoel</a>
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
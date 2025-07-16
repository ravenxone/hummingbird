'use client';

import React from 'react';
import Image from 'next/image';
// import Header from '../components/Header'; // No longer needed here
import styles from './page.module.css';
import { style } from 'framer-motion/client';

const AboutPage = () => {
  const handleCardClick = (cardType: string) => {
    // Placeholder for future expansion functionality
    console.log(`Clicked on ${cardType} card`);
  };

  // const handleProjectClick = (project: string, e: React.MouseEvent) => {
  //   e.stopPropagation(); // Prevent card click
  //   console.log(`Clicked on project: ${project}`);
  // };

  // const handleHobbyClick = (hobby: string, e: React.MouseEvent) => {
  //   e.stopPropagation(); // Prevent card click
  //   console.log(`Clicked on hobby: ${hobby}`);
  // };

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.aboutContent}>
          <div className={styles.textContainer}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span className={styles.hindi}>नमस्ते</span>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', fontWeight: 300, margin: '0 1.5rem', color: '#b36b00' }}>|</span>
              <span style={{ fontFamily: 'PP Editorial New, serif', fontSize: '20px', fontWeight: 800, color: '#b36b00' }}>Namaste</span>
            </div>
            <div>
            <p style={{fontSize:'18px'}}>
              I am Divyansh, a reader, engineer, and tinkerer. I write recipies, code, and notes on design & engineering. I am working on Stencil, to explore how humans and AIs can collaborate! Slide in <a href="https://x.com/divyaanshgoel"> @divyaanshgoel</a>
            </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage; 
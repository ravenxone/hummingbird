'use client';

import React from 'react';
// import Header from '../components/Header'; // No longer needed here
import styles from './page.module.css';

const AboutPage = () => {

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
            <div >
            <p>
              I am Divyansh, a reader, engineer, and tinkerer. 
              </p>
              <p>
              I&apos;m currently based in LA, spending most of my time thinking about how humans and machines can collaborate better. 
              </p>
              <p>
              Since undergrad I&apos;ve built solar electric vehicles, fogponic vertical farming setups, and worked across different startups (including one of my own)</p>
            <p>
              I keep working on projects mostly across energy, robotics, and machine learning. 
              </p>
              <p>
              Currently I am working on <a href='stencil.divyansh.io'>Stencil</a>. I don&apos;t have a good pitch for it yet. It&apos;s an app that helps me think better and work faster (I&apos;ll circle back once I have a solid articualtion of what it really is.)
              </p>
              <span style={{fontWeight:600}}>reaching out to me -</span>  <p>You can reach out to me at by socials below just holler at hello@divyansh.io</p>
        
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage; 
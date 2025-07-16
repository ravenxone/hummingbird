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
          <div className={styles.textContainer}> 
            <div>
              <span className={styles.hindi}>नमस्ते</span>
              <span style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '15px', fontWeight: 300, margin: '0 1.5rem', color: '#b36b00' }}>|</span>
              <span style={{ fontFamily: 'PP Editorial New, serif', fontSize: '20px', fontWeight: 800, color: '#b36b00' }}>Namaste</span>
            </div>
            <div>
            <p>
              I am Divyansh, a reader, engineer, and tinkerer. 
              </p>
              <p>
              I'm currently based in LA, spending most of my time thinking about how humans and machines can collaborate better. 
              </p>
              <p>
              Since undergrad I've built solar electric vehicles, fogponic vertical farming setups, and worked across different startups (including one of my own)</p>
            <p>
              I keep working on projects mostly across energy, robotics, and machine learning. 
              </p>
              <p>
              Currently I am working on <a href='stencil.divyansh.io'>Stencil</a>. I don't have a good pitch for it yet. It's an app that helps me think better and work faster (I'll circle back once I have a solid articualtion of what it really is.)
              </p>
              <p>
              <span style={{fontWeight:600}}>reaching out to me -</span> You can reach out to me at by socials below just holler at hello@divyansh.io
              </p>
            </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="https://x.com/divyaanshgoel"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#1a1a1a', fontWeight: 500 }}
              aria-label="X (Twitter)"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/260px-X_logo_2023.svg.png"
                alt="X"
                width={22}
                height={22}
                style={{ marginRight: 6, display: 'inline-block' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ravenxone/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#0A66C2', fontWeight: 500 }}
              aria-label="LinkedIn"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                width={22}
                height={22}
                style={{ marginRight: 6, display: 'inline-block', borderRadius: 4, background: '#fff' }}
              />
            </a>
          </div>
          </div>
      </div>
    </main>
  );
};

export default AboutPage; 
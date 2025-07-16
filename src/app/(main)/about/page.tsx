'use client';

import React from 'react';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <section className={styles.aboutContent}>
          <div className={styles.textContainer}>
            <div>
              <span className={styles.hindi}>नमस्ते</span>
              <span
                style={{
                  fontFamily: 'Quicksand, sans-serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  color: '#b36b00',
                  margin: '0 8px',
                }}
              >
                |
              </span>
              <span
                style={{
                  fontFamily: 'PP Editorial New, serif',
                  fontSize: '20px',
                  fontWeight: 800,
                  color: '#b36b00',
                }}
              >
                Namaste
              </span>
            </div>
            <div className={styles.prose}>
              <p>
                I am Divyansh, a reader, engineer, and tinkerer.
              </p>
              <p>
              I&apos;m based out of LA, spending most of my time thinking about how humans and machines can collaborate better. 
              </p>
              <p>
                Since undergrad I&apos;ve built solar electric vehicles, fogponic vertical farming setups, and worked across different startups (including one of my own)
              </p>
              <p>
                I keep working on projects mostly across energy, robotics, and machine learning.
              </p>
              <p>
                Currently I am working on <a href='https://stencil.divyansh.io'>Stencil</a>. I don&apos;t have a good pitch for it yet. It&apos;s an app that helps me think better and work faster (I&apos;ll circle back once I have a solid articulation of what it really is.)
              </p>
              <p>
                <span style={{ fontWeight: 600 }}>reaching out to me -</span> You can reach out to me at my socials below or just holler at hello@divyansh.io
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
              <a
                href="https://www.linkedin.com/in/ravenxone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  style={{ width: '32px', height: '32px', display: 'block' }}
                />
              </a>
              <a
                href="https://github.com/ravenxone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  style={{ width: '32px', height: '32px', display: 'block' }}
                />
              </a>
              <a
                href="https://x.com/divyaanshgoel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
              >
                <img
                  src="/logo-black.png"
                  alt="X (formerly Twitter)"
                  style={{ width: '32px', height: '32px', display: 'block' }}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage; 
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main className={clsx(styles.main, 'dark-theme')}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Physical AI & Humanoid Robotics</h1>
          <p className={styles.subtitle}>AI-Generated Content on Humanoid Robotics</p>
          <p className={styles.description}>
            Explore the cutting-edge world of Physical AI, humanoid robotics, and AI-driven systems.
            Learn, experiment, and master robotics concepts through our interactive Codenzers tutorials.
          </p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--primary', styles.button)} to="/docs/intro">
              Start Learning
            </Link>
            <Link className={clsx('button button--secondary', styles.button)} to="/codenzers">
              Explore Codenzers
            </Link>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/img/book-cover.png"
            alt="Physical AI & Humanoid Robotics"
            className={styles.coverImage}
          />
        </div>
      </div>
    </main>
  );
}

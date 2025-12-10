import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="My Site"
      description="Docusaurus default homepage"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">My Site</h1>
          <p className="hero__subtitle">Dinosaurs are cool</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="features">
          <div className="container">
            <div className="row">

              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_mountain.svg" width="200" />
                </div>
                <h3 className="text--center">Easy to Use</h3>
                <p>
                  Docusaurus was designed to be easy to install and use.
                </p>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_tree.svg" width="200" />
                </div>
                <h3 className="text--center">Focus on What Matters</h3>
                <p>
                  Docusaurus lets you focus on your documentation.
                </p>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_react.svg" width="200" />
                </div>
                <h3 className="text--center">Powered by React</h3>
                <p>
                  Extend or customize your website layout by reusing React.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

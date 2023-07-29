import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mudah nan Cepat',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Proses serta dokumentasi instalasi yang mudah bin cepat membuat Anda hanya fokus ke manajemen konten.
      </>
    ),
  },
  {
    title: 'Hulu ke Hilir',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dilengkapi dengan berbagai fitur akademik dari awal masuk, proses di dalam, sampai lulus dan banyak lagi.
      </>
    ),
  },
  {
    title: 'Powered by PHP',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Menggunakan Laravel sebagai framework utama, Permissions, serta Modules untuk memudahkan integrasi antar modul.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

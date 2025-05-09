import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Integração Simples e Rápida',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A API da Bfluence foi desenhada para ser integrada em poucos dias, com endpoints claros e payloads consistentes. Ideal para plataformas de e-commerce, edtechs e apps de fidelidade.
      </>
    ),
  },
  {
    title: 'Foco na Performance',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Você cuida da experiência do seu usuário — nós cuidamos da estrutura. A Bfluence processa transações via fila, garantindo resiliência e escalabilidade mesmo em alto volume.
      </>
    ),
  },
  {
    title: 'Documentação que Trabalha por Você',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Navegue por fluxos claros, exemplos práticos e modelos de dados com descrição de ponta a ponta. Com suporte a Markdown, Mermaid e React, você acessa tudo de forma intuitiva.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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

import Head from 'next/head';
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  withMinMax?: boolean;
  title?: string;
}

const PageWrapper: FC<Props> = ({ children, title, withMinMax = true }) => {
  return (
    <>
      <Head>
        <link
          crossOrigin="use-credentials"
          rel="manifest"
          href="/manifest.json"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <title>{title ?? 'Getplace'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={classNames('h-full', {
          'min-max-width': withMinMax,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper;

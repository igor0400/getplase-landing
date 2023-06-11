import Link from 'next/link';
import { FC } from 'react';
import { useTranslate } from '../../../features/locale';

import settings from '../model/locale/translate.json';

const Footer: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <footer className="py-12 px-6 flex max-sm:flex-col max-sm:text-center flex-wrap justify-center gap-x-8 gap-y-2 opacity-70 text-base font-light min-max-width">
      <Link href="/">{t('text1')}</Link>
      <Link href="/">{t('text2')}</Link>
      <Link href="/">{t('text3')}</Link>
      <Link href="/">{t('text4')}</Link>
    </footer>
  );
};

export default Footer;

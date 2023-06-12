import { FC } from 'react';
import { useTranslate } from '../../../features/locale';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

import settings from '../model/locale/translate.json';
import appstore from 'public/images/appstore-golden.svg';
import playmarket from 'public/images/google-play-golden.svg';
import qr from 'public/images/qr-golden.svg';
import copyright from 'public/icons/copyright.svg';
import Link from 'next/link';
import { useTypedSelector } from '../../../shared';

const Footer: FC = () => {
  const { t } = useTranslate(settings);
  const lang = useTypedSelector((state) => state.locales.lang);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const company = t('company');
  const policy = t('policy');

  return (
    <footer
      className="text-white flex justify-center"
      style={{
        borderRadius: isLargerThan640 ? '80px 80px 0 0' : '40px 40px 0 0',
        background: '#1E1E1E',
      }}
    >
      <div className="max-w-6xl w-full py-10 sm:py-20 px-5 sm:px-10">
        <div
          className="flex flex-wrap gap-x-8 gap-y-1 justify-between items-end pb-3 sm:pb-6 border-b"
          style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase">
            Getplace
          </h2>
          <p className="uppercase font-bold text-lg sm:text-xl lg:text-2xl">
            {t('description')}
          </p>
        </div>
        <div className="flex flex-wrap justify-between max-[800px]:flex-col pt-6 sm:pt-12 gap-y-8 gap-x-4">
          <div>
            <h6 className="font-semibold text-xl">{company.title}</h6>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="font-light pt-2 text-sm flex flex-col gap-1">
                <p>{company.text1}</p>
                <p>{company.text2}</p>
                <p>{company.text3}</p>
                <p>{company.text4}</p>
                <p>{company.text5}</p>
                <p>{company.text6}</p>
              </div>
              <div className="font-light pt-2 text-sm flex flex-col gap-1">
                <Link href={`/${lang}`}>{policy.text1}</Link>
                <Link href={`/${lang}`}>{policy.text2}</Link>
                <Link href={`/${lang}`}>{policy.text3}</Link>
                <Link href={`/${lang}`}>{policy.text4}</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap max-sm:flex-col sm:gap-4 gap-2">
                <Link
                  href="https://apps.apple.com/ru/app/google/id284815942"
                  target="_blank"
                >
                  <Image
                    src={appstore}
                    alt="appstore"
                    height={isLargerThan640 ? 55 : 40}
                    width={isLargerThan640 ? 200 : 160}
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox"
                  target="_blank"
                >
                  <Image
                    src={playmarket}
                    alt="playmarket"
                    height={isLargerThan640 ? 55 : 40}
                    width={isLargerThan640 ? 200 : 160}
                  />
                </Link>
              </div>
              <Image
                src={qr}
                alt="qr"
                height={55}
                width={isLargerThan640 ? 55 : 100}
              />
            </div>
            <div className="flex gap-1 opacity-50 font-light min-[801px]:justify-end">
              <Image src={copyright} alt="copyright" width={15} />
              <p>2023 Getplace.tech</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

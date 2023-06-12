import React, { FC, useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate';

import background from 'public/images/title-bg.png';
import textBgLine from 'public/images/title-bg-text-line.png';
import appstore from 'public/images/appstore-dl.svg';
import googlaPlay from 'public/images/google-play-dl.svg';
import qr from 'public/images/qr-dl.png';

import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';

const Title: FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const { t } = useTranslate(settings);
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isLargerThan425 = useMediaQuery('(min-width: 425px)');

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTitleIndex((index) => {
          if (index === t('titleWords').length + 1) return 0;
          return index + 1;
        }),
      1500,
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      style={
        isLargerThan1024
          ? {
              backgroundImage: `url('${background.src}')`,
              backgroundPositionY: '100%',
              backgroundPositionX: 'right',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
      className={classNames(
        'max-w-[2000px] mx-auto min-[780px]:pt-16 2xl:pt-20 sm:pb-20',
        {
          'full-height': !isLargerThan1024,
        },
      )}
    >
      <div className="h-full max-w-[1360px] w-full mx-auto flex max-lg:my-auto items-center gap-6 min-[1700px]:gap-36 px-5 sm:px-10">
        <div className="py-36 lg:h-[590px] flex flex-col justify-center">
          <h1 className="flex flex-col justify-end text-4xl min-[425px]:text-5xl sm:text-7xl lg:text-8xl leading-[1.1] font-extrabold w-[300px] min-[425px]:w-[384px] sm:w-[576px] lg:w-[768px]">
            {t('title')}
            <TextTransition springConfig={presets.wobbly}>
              {t('titleWords')[titleIndex % t('titleWords').length].title}
            </TextTransition>
          </h1>
          <p
            className="mt-5 sm:mt-8 min-[425px]:text-lg sm:text-xl leading-7 min-[425px]:leading-8 max-w-[280px] min-[425px]:max-w-sm"
            style={{
              backgroundImage: `url('${textBgLine.src}')`,
              backgroundPositionY: isLargerThan425 ? '30%' : '20%',
              backgroundPositionX: 'left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-4 pt-16 sm:pt-20 max-sm:items-center">
            <div className="flex max-sm:flex-col flex-wrap gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-4">
              <Link
                href="https://apps.apple.com/ru/app/google/id284815942"
                target="_blank"
              >
                <Image
                  src={appstore}
                  alt="appstore"
                  width={isLargerThan640 ? 220 : 150}
                  height={isLargerThan640 ? 65 : 40}
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox"
                target="_blank"
              >
                <Image
                  src={googlaPlay}
                  alt="googlaPlay"
                  width={isLargerThan640 ? 220 : 150}
                  height={isLargerThan640 ? 65 : 40}
                />
              </Link>
            </div>

            <Image src={qr} alt="qr" width={isLargerThan640 ? 65 : 100} />
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src={
              t('titleWords')[titleIndex % t('titleWords').length].images.phone1
            }
            alt="phone"
            className="w-fit h-fit z-10 max-[1160px]:hidden"
          />
          <Image
            src={
              t('titleWords')[titleIndex % t('titleWords').length].images.phone2
            }
            alt="phone2"
            className="w-fit h-fit -ml-5 max-2xl:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;

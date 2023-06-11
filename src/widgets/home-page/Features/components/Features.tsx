import React, { FC } from 'react';
import { useTranslate } from '../../../../features/locale';
import Image from 'next/image';

import settings from '../model/locale/translate';
import arrow from 'public/images/features-arrow.png';
import FeaturesCard from '../../../../entities/home-page/FeaturesCard';
import { useMediaQuery } from '@mui/material';

const Features: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');

  return (
    <div
      className="py-20 sm:py-36 max-w-6xl mx-auto px-5 sm:px-20 xl:px-10"
      id="features"
    >
      <div className="flex max-lg:flex-col lg:justify-between lg:items-end">
        <div className="flex relative">
          <Image
            src={arrow}
            alt="arrow"
            className="absolute -bottom-28 lg:-bottom-24 -left-16 max-sm:hidden"
          />
          <h2 className="text-3xl sm:text-5xl font-extrabold max-w-md">
            {t('title')}
          </h2>
        </div>
        <p className="max-sm:text-sm max-lg:mt-2">{t('description')}</p>
      </div>
      <div
        className="grid gap-4 sm:gap-8 mt-8 sm:mt-12"
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${
            isLargerThan640 ? 224 : 160
          }px, 1fr))`,
        }}
      >
        {t('cards').map((item: any, i: number) => (
          <FeaturesCard {...item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Features;

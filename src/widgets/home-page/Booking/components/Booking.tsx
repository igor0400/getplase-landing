import React, { FC } from 'react';
import { useMediaQuery } from '@mui/material';

import lines from 'public/images/booking-lines.png';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate';

const Booking: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan330 = useMediaQuery('(min-width: 330px)');

  return (
    <div className="py-20 sm:py-36 max-w-6xl mx-auto px-5 sm:px-10">
      <h2
        className="text-3xl w-fit sm:text-5xl sm:h-[55px] font-extrabold"
        style={
          isLargerThan330
            ? {
                background: `url('${lines.src}') right 35% / 70% no-repeat`,
              }
            : undefined
        }
      >
        {t('title')}
      </h2>
    </div>
  );
};

export default Booking;

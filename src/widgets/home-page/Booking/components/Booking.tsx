import React, { FC, useState } from 'react';
import { useMediaQuery } from '@mui/material';

import lines from 'public/images/booking-lines.png';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate';
import BookingCard from '../../../../entities/home-page/BookingCard';
import Image from 'next/image';

const Booking: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isLargerThan330 = useMediaQuery('(min-width: 330px)');
  const [activeCard, setActiveCard] = useState(0);
  const cards: any[] = t('cards');

  return (
    <div
      className="pt-20 sm:pt-36 max-w-6xl mx-auto px-5 sm:px-10"
      id="booking"
    >
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
      <div className="pt-8 sm:pt-12 flex max-md:flex-wrap gap-8 xl:gap-20">
        <div
          className="grid sm:flex flex-col gap-8 w-full"
          style={
            isLargerThan640
              ? undefined
              : {
                  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
                }
          }
        >
          {cards.slice(0, 3).map((item: any) => (
            <BookingCard
              key={item.id}
              {...item}
              isActive={item.id === activeCard}
              onClick={() => setActiveCard(item.id)}
            />
          ))}
        </div>

        <Image
          src={cards[activeCard].imageUrl}
          alt="screen"
          className="max-xl:hidden"
        />

        <div
          className="grid sm:flex flex-col gap-8 w-full"
          style={
            isLargerThan640
              ? undefined
              : {
                  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
                }
          }
        >
          {cards.slice(3).map((item: any) => (
            <BookingCard
              key={item.id}
              {...item}
              isActive={item.id === activeCard}
              onClick={() => setActiveCard(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;

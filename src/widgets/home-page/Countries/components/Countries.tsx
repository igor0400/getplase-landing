import React, { FC, useState } from 'react';
import { useTranslate } from '../../../../features/locale';
import { useMediaQuery } from '@mui/material';
import CountryCard from '../../../../entities/home-page/CountryCard';

import settings from '../model/locale/translate.json';
import lines from 'public/icons/features-lines.svg';

const Countries: FC = () => {
  const { t } = useTranslate(settings);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const [activeCard, setActiveCard] = useState<null | number>(null);

  return (
    <div className="pt-20 sm:pt-36" id="countries">
      <div
        className="rounded-3xl sm:rounded-[40px]"
        style={{ background: '#FFD53F' }}
      >
        <div className="py-10 sm:py-20 max-w-6xl mx-auto px-5 sm:px-10">
          <h2
            className="text-3xl sm:text-5xl sm:h-[80px] font-extrabold"
            style={
              isLargerThan640
                ? {
                    background: `url('${lines.src}') 0% 100% no-repeat`,
                  }
                : undefined
            }
          >
            {t('title')}
          </h2>
          <div className="mt-6 sm:mt-10 md:mt-6 flex flex-wrap gap-2">
            {t('countries').map((item: any) => (
              <CountryCard
                {...item}
                key={item.id}
                onGlobalClick={() => {
                  if (activeCard === item.id) {
                    setActiveCard(null);
                  } else {
                    setActiveCard(item.id);
                  }
                }}
                isGlobalActive={item.id === activeCard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;

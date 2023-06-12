import React, { FC, useState } from 'react';
import { useTranslate } from '../../../../features/locale';
import FaqCard from '../../../../entities/home-page/FaqCard';

import settings from '../model/locale/translate.json';

const Faq: FC = () => {
  const { t } = useTranslate(settings);
  const [activeCard, setActiveCard] = useState<null | number>(null);

  return (
    <div className="py-20 sm:py-36 max-w-6xl mx-auto px-5 sm:px-10" id="faq">
      <h2 className="text-3xl w-fit sm:text-5xl sm:h-[55px] font-extrabold">
        {t('title')}
      </h2>
      <div className="pt-8 sm:pt-12 flex flex-col gap-4">
        {t('cards').map((item: any, i: number) => (
          <FaqCard {...item} key={i} onClick={() => setActiveCard(i)} isActive={i === activeCard} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

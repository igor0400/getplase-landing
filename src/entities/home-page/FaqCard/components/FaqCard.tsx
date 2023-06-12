import React, { FC, MouseEventHandler } from 'react';
import Image from 'next/image';

import plus from 'public/icons/plus.svg';
import minus from 'public/icons/minus.svg';
import { useMediaQuery } from '@mui/material';

interface Props {
  title: string;
  description: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isActive: boolean;
}

const FaqCard: FC<Props> = ({ title, description, onClick, isActive }) => {
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isLargerThan425 = useMediaQuery('(min-width: 425px)');

  return (
    <div
      onClick={onClick}
      className="rounded-3xl shadow-md p-4 sm:p-6 cursor-pointer"
      style={{ background: isActive ? 'rgba(252, 199, 10, 0.15)' : undefined }}
    >
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-lg min-[425px]:text-xl sm:text-2xl font-bold">
          {title}
        </h3>
        {isActive ? (
          <Image
            src={minus}
            alt="minus"
            width={isLargerThan640 ? 25 : isLargerThan425 ? 20 : 16}
            height={isLargerThan640 ? 25 : isLargerThan425 ? 20 : 16}
          />
        ) : (
          <Image
            src={plus}
            alt="plus"
            width={isLargerThan640 ? 25 : isLargerThan425 ? 20 : 16}
            height={isLargerThan640 ? 25 : isLargerThan425 ? 20 : 16}
          />
        )}
      </div>
      {isActive && (
        <p className="animate__animated animate__fadeIn animate__fast max-[425px]:text-sm sm:text-lg mt-2 sm:mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default FaqCard;

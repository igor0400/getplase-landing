import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  title: string;
  iconUrl: any;
}

const FeaturesCard: FC<Props> = ({ title, iconUrl }) => {
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');

  return (
    <div className="py-6 px-8 sm:py-8 sm:px-16 rounded-[50px] flex flex-col gap-6 justify-end items-center shadow-md sm:shadow-lg h-[200px] sm:h-[250px]">
      <Image
        src={iconUrl}
        alt="icon"
        width={isLargerThan640 ? 100 : 70}
        height={isLargerThan640 ? 100 : 70}
      />
      <p className="text-lg lg:text-xl font-bold">{title}</p>
    </div>
  );
};

export default FeaturesCard;

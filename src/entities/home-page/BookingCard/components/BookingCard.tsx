import classNames from 'classnames';
import Image from 'next/image';
import React, { FC, MouseEventHandler } from 'react';

interface Props {
  title: string;
  description: string;
  iconUrl: any;
  imageUrl: any;
  background: string;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const BookingCard: FC<Props> = ({
  title,
  description,
  iconUrl,
  imageUrl,
  background,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        'shadow-md sm:shadow-lg p-5 sm:p-8 rounded-3xl transition-all duration-500 sm:max-w-sm',
        {
          'cursor-pointer': !isActive,
          'cursor-default': isActive,
        },
      )}
      style={{ background: isActive ? 'rgba(255, 199, 0, 0.14)' : undefined }}
      onClick={onClick}
    >
      <div className="flex gap-8 items-center justify-between">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <div
          style={{ background }}
          className="p-4 sm:p-2 rounded-2xl w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center"
        >
          <Image src={iconUrl} alt="icon" />
        </div>
      </div>
      {isActive && (
        <p className="animate__animated animate__fadeIn animate__fast sm:text-lg font-semibold mt-2 sm:mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default BookingCard;

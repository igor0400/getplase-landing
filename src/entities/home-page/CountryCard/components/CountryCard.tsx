import classNames from 'classnames';
import React, { FC, useState } from 'react';

interface Props {
  title: string;
  cities: string[];
}

const CountryCard: FC<Props> = ({ title, cities }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="rounded-lg py-2 px-4 cursor-default bg-white hover:bg-emerald-300"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {title}
    </div>
  );
};

export default CountryCard;

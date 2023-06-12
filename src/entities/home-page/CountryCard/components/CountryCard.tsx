import classNames from 'classnames';
import React, { FC, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

interface Props {
  title: string;
  cities: string[];
}

const CountryCard: FC<Props> = ({ title, cities }) => {
  const [isActive, setIsActive] = useState(false);
  const [citiesList, setCitiesList] = useState<
    { title: string; index: number }[]
  >([]);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');

  useEffect(() => {
    if (isActive) {
      const addCity = () => {
        setCitiesList((state) => {
          if (state.length !== cities.length) {
            if (state.length) {
              const lastI = state[state.length - 1].index;

              return state.concat([{ title: cities[lastI], index: lastI + 1 }]);
            }

            return [{ title: cities[0], index: 1 }];
          }

          return state;
        });
      };

      const interval = setInterval(addCity, 50);
      return () => clearInterval(interval);
    }

    const removeCity = () => {
      if (citiesList.length) {
        setCitiesList((state) => state.splice(0, state.length - 1));
      }
    };

    const interval = setInterval(removeCity, 50);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      <div
        className={classNames('rounded-lg py-2 px-4 cursor-pointer', {
          'bg-emerald-300': isActive,
          'bg-white': !isActive,
        })}
        onMouseEnter={() => (isLargerThan640 ? setIsActive(true) : null)}
        onMouseLeave={() => (isLargerThan640 ? setIsActive(false) : null)}
        onClick={() =>
          isLargerThan640 ? null : setIsActive((state) => !state)
        }
      >
        {title}
      </div>
      {citiesList.length > 1 && (
        <>
          {citiesList.map(({ title }, i) => (
            <div
              className={classNames(
                'animate__animated rounded-lg py-2 px-4 cursor-default bg-gray-200',
                {
                  animate__fadeIn: isActive,
                  animate__fadeOut: !isActive,
                },
              )}
              style={{ animationDirection: '0.1s' }}
              key={i}
            >
              {title}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CountryCard;

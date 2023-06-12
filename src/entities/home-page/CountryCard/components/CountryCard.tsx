import classNames from 'classnames';
import React, { FC, useState, useEffect, MouseEventHandler } from 'react';
import { useMediaQuery } from '@mui/material';

interface Props {
  title: string;
  cities: string[];
  isGlobalActive: boolean;
  onGlobalClick?: Function;
}

const CountryCard: FC<Props> = ({
  title,
  cities,
  onGlobalClick,
  isGlobalActive,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [citiesList, setCitiesList] = useState<
    { title: string; index: number }[]
  >([]);
  const isLargerThan640 = useMediaQuery('(min-width: 640px)');
  const isFullActive = isLargerThan640 ? isActive : isGlobalActive && isActive;

  useEffect(() => {
    if (isFullActive) {
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
  }, [isFullActive]);

  return (
    <>
      <div
        className={classNames('rounded-lg py-2 px-4 cursor-pointer relative', {
          'bg-emerald-300': isFullActive,
          'bg-white': !isFullActive,
        })}
        onMouseEnter={() => (isLargerThan640 ? setIsActive(true) : null)}
        onMouseLeave={() => (isLargerThan640 ? setIsActive(false) : null)}
        onClick={() => {
          if (!isLargerThan640) {
            if (isGlobalActive) {
              setIsActive(false);
            } else {
              setIsActive(true);
            }
            if (onGlobalClick) onGlobalClick(setIsActive);
          }
        }}
      >
        <p>{title}</p>
        {citiesList.length > 1 && (
          <div
            className={classNames(
              'animate__animated animate__faster shadow-lg absolute min-w-[110px] top-12 left-0 flex flex-col gap-1 bg-white p-2 rounded-lg z-50',
              {
                animate__fadeIn: isFullActive,
                animate__fadeOut: !isFullActive,
              },
            )}
          >
            {citiesList.map(({ title }, i) => (
              <div
                className={classNames(
                  'animate__animated rounded-lg py-2 px-4 cursor-default bg-gray-200',
                  {
                    animate__fadeIn: isFullActive,
                    animate__fadeOut: !isFullActive,
                  },
                )}
                style={{ animationDirection: '0.05s' }}
                key={i}
              >
                {title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CountryCard;

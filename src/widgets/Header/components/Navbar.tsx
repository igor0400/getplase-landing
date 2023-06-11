import React, { FC } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useTranslate } from '../../../features/locale';

import settings from '../model/locale/translate.json';

interface Props {
  className?: string;
  onCloseModal?: Function;
}

const Navbar: FC<Props> = ({ className, onCloseModal }) => {
  const { t } = useTranslate(settings);

  const closeModal = () => {
    if (onCloseModal) onCloseModal();
  };

  return (
    <nav className={className}>
      <ul className="flex max-xl:flex-col gap-5 uppercase font-light">
        {t('navs').map(({ title, link }: any) => (
          <React.Fragment key={title}>
            {link === '/' ? (
              <div
                onClick={() => {
                  scroll.scrollToTop();
                  closeModal();
                }}
                className="cursor-pointer"
              >
                <li>{title}</li>
              </div>
            ) : (
              <Link
                to={link.replace('/#', '')}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeModal}
              >
                <li>{title}</li>
              </Link>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { FC } from 'react';
import { MenuIcon } from '../../../shared';

import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import { Drawer } from '@mui/material';
import { useTranslate } from '../../../features/locale';

import settings from '../model/locale/translate.json';

interface Props {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Menu: FC<Props> = ({ isMenuOpen, setIsMenuOpen, className }) => {
  const { t } = useTranslate(settings);

  const onClose = () => setIsMenuOpen(false);
  const onOpen = () => setIsMenuOpen(true);

  return (
    <>
      <MenuIcon className={className} onClick={onOpen} />
      <Drawer
        title={t('navTitle')}
        anchor="right"
        onClose={onClose}
        open={isMenuOpen}
        className="xl:hidden"
      >
        <CloseIcon className="-ml-4 cursor-pointer" onClick={onClose} />
        <Navbar className="mt-6 w-fit" onCloseModal={onClose} />
        <Toolbar className="min-[800px]:hidden mt-5 flex flex-col gap-5" />
      </Drawer>
    </>
  );
};

export default Menu;

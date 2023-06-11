import { FC, useState } from 'react';
import Menu from './Menu';
import Navbar from './Navbar';
import Toolbar from './Toolbar';
import Link from 'next/link';
import { useTypedSelector } from '../../../shared';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useTypedSelector((state) => state.locales.lang);

  return (
    <div className="header-wrapper">
      <header className="header max-w-[1360px] mx-auto flex justify-between items-center px-5 sm:px-10">
        <div className="flex items-center gap-8">
          <Link href={`/${lang}`}>
            <h6 className="uppercase text-2xl sm:text-3xl font-extrabold">
              Getplace
            </h6>
          </Link>

          <Navbar className="max-xl:hidden" />
        </div>

        <div className="flex items-center gap-6">
          <Toolbar className="flex gap-4 items-center max-[800px]:hidden" />
          <Menu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className="xl:hidden w-min"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;

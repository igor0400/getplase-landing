import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { changeLang } from '../model/store/localeStore';
import { defaultLocale, locales } from '../configs/settings';

interface Props {
  children: ReactNode;
}

const LocaleWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const locale = localStorage.getItem('locale');
    const spPath = router.asPath.split('/');

    if (spPath.length > 2) return;

    router.push(`/${locale ?? defaultLocale}`);
  }, []);

  useEffect(() => {
    const lang: any = router.asPath.split('/')[1];

    if (locales.includes(lang ?? '')) {
      dispatch(changeLang(lang ?? 'ru'));
      localStorage.setItem('locale', lang ?? 'ru');
    }
  }, [router.asPath]);

  return <>{children}</>;
};

export default LocaleWrapper;

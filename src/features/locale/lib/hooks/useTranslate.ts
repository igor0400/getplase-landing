import { useTypedSelector } from '../../../../shared';
import { useCallback } from 'react';

export const useTranslate = (settings: any) => {
  const lang = useTypedSelector((state) => state.locales.lang);

  const t = useCallback(
    (val: string) => {
      return settings[lang][val];
    },
    [lang],
  );

  return { t };
};

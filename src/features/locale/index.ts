import locales from './model/store/localeStore';
import { changeLang } from './model/store/localeStore';
import LocaleWrapper from './components/LocaleWrapper';
import { useTranslate } from './lib/hooks/useTranslate';

export { locales, changeLang, LocaleWrapper, useTranslate };

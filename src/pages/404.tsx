import { useTranslate } from '../features/locale';
import { PageWrapper } from '../shared';

import { notFoundSettings } from '../widgets/NotFound';

export default function NotFound() {
  const { t } = useTranslate(notFoundSettings);

  return (
    <PageWrapper withMinMax={false}>
      <div className="flex flex-col w-full full-height justify-center items-center">
        <h2 className="text-7xl sm:text-8xl font-bold">404</h2>
        <p className="opacity-70 sm:text-lg">{t('description')}</p>
      </div>
    </PageWrapper>
  );
}

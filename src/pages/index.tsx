import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTypedSelector, PageWrapper } from '../shared';

export default function Home() {
  const router = useRouter();
  const lang = useTypedSelector((state) => state.locales.lang);

  useEffect(() => {
    router.push(`/${lang}`);
  }, []);

  return (
    <PageWrapper withMinMax={false}>
      <div></div>
    </PageWrapper>
  );
}

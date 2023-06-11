import { PageWrapper } from '../../shared';
import Countries from '../../widgets/home-page/Countries';
import Features from '../../widgets/home-page/Features';
import Title from '../../widgets/home-page/Title';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Features />
      <Countries />
    </PageWrapper>
  );
}

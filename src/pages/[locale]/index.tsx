import { PageWrapper } from '../../shared';
import Booking from '../../widgets/home-page/Booking';
import Countries from '../../widgets/home-page/Countries';
import Faq from '../../widgets/home-page/Faq';
import Features from '../../widgets/home-page/Features';
import Title from '../../widgets/home-page/Title';

export default function Home() {
  return (
    <PageWrapper withMinMax={false}>
      <Title />
      <Features />
      <Countries />
      <Booking />
      <Faq />
    </PageWrapper>
  );
}

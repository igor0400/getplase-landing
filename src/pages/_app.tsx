import type { AppProps } from 'next/app';
import Header from '../widgets/Header';
import Footer from '../widgets/Footer';
import { store } from '../app';
import { Provider } from 'react-redux';
import { LocaleWrapper } from '../features/locale';

import '../app/styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <LocaleWrapper>
        <div className="wrapper">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </LocaleWrapper>
    </Provider>
  );
}

import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head';
import './styles.css';
import Header from 'libs/client/ui/src/lib/header/header';
import Footer from 'libs/client/ui/src/lib/footer/footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DrPlus</title>
      </Head>
      <main className="app">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}

export default CustomApp;

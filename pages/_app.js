import '@master/css';
import Head from 'next/head';
import ChatPlugin from '../components/ChatPlugin';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <ChatPlugin />
    </>
  );
}

export default MyApp;

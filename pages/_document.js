import { Html, Head, Main, NextScript } from 'next/document';
import ChatPlugin from '../components/ChatPlugin';
import PrimaryFooter from '../components/Footer/Primary';

export default function Document() {
  return (
    <Html>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font:sans bg:fade-8 color:white">
        <Main />
        <PrimaryFooter />
        <ChatPlugin />
        <NextScript />
      </body>
    </Html>
  );
}

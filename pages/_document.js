import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import ChatPlugin from '../components/ChatPlugin';
import PrimaryFooter from '../components/Footer/Primary';
import { render } from '@master/css/render';
import { StyleSheet } from '@master/css';

export default function AppDocument() {
  return (
    <Html>
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
        {/* Google tag (gtag.js)  */}
        <script
          async
          src={`//www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
      </Head>
      <body className="font:sans bg:fade-8 color:white">
        <Main />
        <PrimaryFooter />
        <NextScript />
      </body>
    </Html>
  );
}

AppDocument.getInitialProps = async (ctx) => {
  const { css } = render((await ctx.renderPage()).html, { StyleSheet });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: (
      <>
        <style id="master-css">{css}</style>
        {initialProps.styles}
      </>
    )
  };
};

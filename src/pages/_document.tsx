/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/_document.tsx
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const cache = createCache({ key: "css", prepend: true });
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {emotionStyleTags}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="uk">
        <Head>
          {/* Preconnect to Google Fonts to speed up font fetch */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          {/* Non-blocking load: preload stylesheet then switch rel to stylesheet on load */}
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;700&display=swap"
            id="gf-preload"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(() => { const l = document.getElementById('gf-preload'); if (l) { l.addEventListener('load', function() { (this as HTMLLinkElement).rel = 'stylesheet'; }); } })()`,
            }}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

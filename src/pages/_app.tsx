import "@/styles/globals.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/constants/theme";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import type { EmotionCache } from "@emotion/cache";

// Client-side cache, used when no emotionCache is provided by the server
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

export default function App({ Component, pageProps, emotionCache }: MyAppProps) {
  const cache = emotionCache ?? clientSideEmotionCache;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { createTheme, MantineProvider } from '@mantine/core';

const primaryFont = Inter({ subsets: ['latin'] });

const theme = createTheme({
  scale: 1,
  fontFamily: primaryFont.style.fontFamily,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Another AI App</title>
      </Head>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default App;

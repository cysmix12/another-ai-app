import '@mantine/core/styles.css';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';

const primaryFont = Inter({ subsets: ['latin'] });

const theme = createTheme({
  scale: 1,
  fontFamily: primaryFont.style.fontFamily,
  defaultRadius: 'md',
});

export const metadata: Metadata = {
  title: 'Another AI App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

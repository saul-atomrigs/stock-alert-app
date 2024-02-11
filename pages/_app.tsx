import '@/styles/design-system';
import { GlobalStyles } from '@/styles/design-system';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import './globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

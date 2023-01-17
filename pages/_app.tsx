import 'styles/globals.scss';
import { Inter, Roboto } from '@next/font/google';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });
const clashDisplay = localFont({
  src: '../assets/fonts/clash-display-variable.ttf',
});
const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${inter.style.fontFamily};
          --clash-display-font: ${clashDisplay.style.fontFamily};
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

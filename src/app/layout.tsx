import type { Metadata } from 'next';
import { Montserrat, Unbounded, Inter, Wallpoet } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const wallpoet = Wallpoet({
  variable: '--font-wallpoet',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Karma',
  description: 'Karma - високотехнологічне українське виробництво',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body
        className={`${montserrat.variable} ${unbounded.variable} ${inter.variable} ${wallpoet.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

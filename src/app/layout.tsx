import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Pacifico } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ['latin'], variable: '--font-body-inter' });
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading-pacifico',
});

export const metadata: Metadata = {
  title: 'Soulful Play',
  description: 'Healing the heart through laughter and play',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${pacifico.variable}`}>
      <body className='font-body bg-blush text-[#212121]'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

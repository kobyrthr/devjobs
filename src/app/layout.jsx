import { AppNavbar } from '@/components/ui/app-navbar';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';

const leagueSpartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Invoice',
  description: 'Invoice App',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>
        <ClientLayout>
          <AppNavbar />
          <main className="block w-full relative">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}

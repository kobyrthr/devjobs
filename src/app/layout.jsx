import { AppNavbar } from '@/components/ui/app-navbar';
import { League_Spartan } from 'next/font/google';
import './globals.css';
import ClientLayout from './client-layout';
import { ThemeProvider } from '@/components/theme-provider';

const leagueSpartan = League_Spartan({
  variable: '--font-spartan',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dev Jobs',
  description:
    'Find your next developer role at leading tech companies. Browse through hundreds of software engineering positions, from frontend to backend, DevOps to mobile development. Your next tech career move starts here.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.className} antialiased`}>
        <ClientLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppNavbar />
            <main className="block w-full relative">{children}</main>
          </ThemeProvider>
        </ClientLayout>
      </body>
    </html>
  );
}

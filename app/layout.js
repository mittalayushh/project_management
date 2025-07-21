import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nakama - Project Management Platform',
  description: 'Streamline your projects with Nakama. Organize tasks, collaborate with your team, and track progress all in one place.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
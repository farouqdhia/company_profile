import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Studio Kita | Creative Digital Studio',
  description: 'Membangun masa depan digital.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
};
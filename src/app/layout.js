import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bill Splitter',
  description: 'Splitting bill never been easier!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NavBar/> 
        {children}
      </body>
    </html>
  );
}

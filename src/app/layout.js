import './globals.css';
import StoreProvider from '@/feature/provider';

export const metadata = {
  title: 'Pastors Line',
  description: 'Pastors line, react developer test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

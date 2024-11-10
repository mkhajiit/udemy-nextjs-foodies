import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: '넥스트레벨 푸드',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

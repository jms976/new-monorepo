import { Providers } from '../components/providers';

import '../styles/globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

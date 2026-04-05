import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Elise's Cupcakes",
  description: 'Premium small-batch cupcakes for celebrations and special occasions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

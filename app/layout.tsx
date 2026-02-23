import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'F-22 Raptor | Air Superiority Redefined',
  description: 'Cinematic landing page for the F-22 Raptor stealth fighter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased selection:bg-[#FF5A00] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

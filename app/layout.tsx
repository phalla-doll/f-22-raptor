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
  keywords: ['F-22', 'Raptor', 'stealth fighter', 'US Air Force', 'military aircraft', 'air superiority', 'fifth generation fighter'],
  openGraph: {
    type: 'website',
    url: 'https://f-22-raptor-two.vercel.app/',
    title: 'F-22 Raptor | Air Superiority Redefined',
    description: 'Cinematic landing page for the F-22 Raptor stealth fighter.',
    siteName: 'F-22 Raptor',
    images: [
      {
        url: '/clipboard-image-1771810708.png',
        width: 1116,
        height: 716,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'F-22 Raptor | Air Superiority Redefined',
    description: 'Cinematic landing page for the F-22 Raptor stealth fighter.',
    images: ['/clipboard-image-1771810708.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased selection:bg-[#FF5A00] selection:text-black" suppressHydrationWarning>
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono, Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ['latin'], weight: ['300','400','500','700'], display: 'swap' });

const GA_ID = 'G-VXD2V3G9BN'


const Gtag = () => (
       <head>
        {/* gtag.js – loads the library */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        {/* initialise it */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
)
export const metadata: Metadata = {
  title: 'FitCouch - Coming Soon',
  description: 'FitCouch By Shaul Haham - Fitness & Nutrition Coaching. Coming Soon.',
  generator: 'FitCouch',
  icons: {
    icon: [
      {
        url: '/apple-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/apple-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
            <Gtag />

      <body className={`${rubik.className} antialiased site`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

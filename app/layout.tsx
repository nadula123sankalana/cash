import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1820470128818110';

export const metadata: Metadata = {
  title: 'Fund Rise Capital - Fast Business Financing in 24 Hours',
  description:
    'Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.',
  keywords:
    'business funding, fast loans, business financing, 24 hour funding, capital funding',
  authors: [{ name: 'Fund Rise Capital' }],
  icons: {
    icon: '/1.ico',
  },
  openGraph: {
    title: 'Fund Rise Capital - Fast Business Financing in 24 Hours',
    description:
      'Get the fast, flexible capital you need to seize opportunities, manage cash flow, and take your business to the next level.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&family=Lato:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Facebook Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook-pixel"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}


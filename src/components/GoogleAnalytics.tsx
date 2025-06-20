'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-N6LWHYF9NC';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (typeof gtag !== 'undefined') {
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                send_page_view: true,
              });
            }
          `,
        }}
      />
    </>
  );
}

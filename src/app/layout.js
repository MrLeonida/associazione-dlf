import { Poppins } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from 'next/script';
config.autoAddCss = false

const fontFamily = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ['latin'] })

export const metadata = {
  title: '[Develop] Associazione DLF Treviso Belluno',
  description: '[Develop] Associazione DLF Treviso Belluno',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#115e59"></meta>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      
      <Script id="my-script" strategy="afterInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "floatingPreferencesButtonDisplay": "bottom-right",
            "perPurposeConsent": true,
            "siteId": 3591404,
            "whitelabel": false,
            "cookiePolicyId": 55306890,
            "lang": "it",
            "banner": {
              "acceptButtonDisplay": true,
              "closeButtonRejects": true,
              "customizeButtonDisplay": true,
              "explicitWithdrawal": true,
              "listPurposes": true,
              "position": "float-bottom-center",
              "showTitle": false
            }
          };
        `}
      </Script>
      <Script 
        src="https://cs.iubenda.com/autoblocking/3591404.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="//cdn.iubenda.com/cs/iubenda_cs.js" 
        strategy="afterInteractive"
        charset="UTF-8" 
        async 
      />

      </head>
      <body className={fontFamily.className}>{children}</body>
    </html>
  )
}
